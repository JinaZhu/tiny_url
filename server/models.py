from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Url(db.Model):
    __tablename__ = "urls"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    original_url = db.Column(db.Text)
    converted_url = db.Column(db.Text, unique=True)
    visit_count = db.Column(db.Integer)

    def __repr__(self):
        return f"<input_url={self.original_url} converted_url={self.converted_url}>"



