from flask import jsonify, request, redirect
from .helper import generate_unqiue_path_part

from server.models import Url, db
from server.convert import convert_bp

@convert_bp.route('/api/convert_url', methods=["POST"])
def convert_url():
    request_body = request.get_json()

    if request_body is None or request_body.get('url') == "":
        return jsonify("No url was provided, please try again"), 400
    
    try:
        # helper to generate unqiue path
        unqiue_path_part = generate_unqiue_path_part(request_body.get('url'), Url)
        print('unqiue_path_part', unqiue_path_part)
        
        db.session.add(Url(original_url=request_body.get('url'), converted_url=unqiue_path_part, visit_count=0))
        db.session.commit()
        response = {
            'original_url': request_body.get('url'),
            'converted_url': unqiue_path_part
        }

        return response, 200
    except:
        return jsonify("Something went wrong, please try again!"), 500

@convert_bp.route('/<path_end>')
def redirect_converted_url(path_end):
    url_path_end = Url.query.filter_by(converted_url=path_end).first()
    # increase visit count everytime this path is entered
    url_path_end.visit_count += 1
    db.session.commit()
    return redirect(url_path_end.original_url, 302)
        





    