from flask import Flask
import os

from server.main import main_bp
from server.convert import convert_bp

def create_app(config_file="settings.py"):
    app = Flask(__name__, static_folder=os.path.abspath(
        "build"), static_url_path='/')
    
    app.config.from_pyfile(config_file)

    app.register_blueprint(main_bp)
    app.register_blueprint(convert_bp)

    return app