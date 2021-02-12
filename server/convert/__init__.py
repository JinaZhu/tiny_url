from flask import Blueprint
from flask_cors import CORS

convert_bp = Blueprint('url', __name__)

# Enable CORS on convert api routes
CORS(convert_bp)

from server.convert import routes, helper