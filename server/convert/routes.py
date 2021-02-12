from flask import jsonify, request, redirect
from .helper import generate_unique_path_part

from server.models import Url, db
from server.convert import convert_bp

@convert_bp.route('/api/convert_url', methods=["POST"])
def convert_url():
    """Takes in a url and return a tiniUrl """

    request_body = request.get_json()
    # extra check to ensure we have a url to work with
    if request_body is None or request_body.get('url') == "":
        return jsonify("No url was provided, please try again"), 400

    if 'http' not in request_body.get('url'):
        return jsonify("Invalid URL, please try again"), 400
    
    try:
        # helper to generate unique path
        unique_path_part = generate_unique_path_part(request_body.get('url'), Url)
        
        new_url = Url(original_url=request_body.get('url'), converted_url=unique_path_part, visit_count=0)
        
        db.session.add(new_url)
        db.session.commit()

        response = {
            'original_url': request_body.get('url'),
            'converted_url': unique_path_part
        }

        return response, 200
    except:
        return jsonify("Something went wrong, please try again!"), 500

@convert_bp.route('/<path_end>')
def redirect_converted_url(path_end):
    try:
        stored_url = Url.query.filter_by(converted_url=path_end).first()
        # increase visit count everytime this path is entered
        stored_url.visit_count += 1
        db.session.commit()

        return redirect(stored_url.original_url, 302)
    except:
        return jsonify("Something went wrong, please try again!"), 500
        





    