import hashlib
import uuid

def generate_unique_path_part(url, Url_Model):
    unique_id = uuid.uuid4()
    # combining url with a unique id to ensure same url will get their own unique path
    unique_url = url + str(unique_id)
    encoded_data = hashlib.sha1(unique_url.encode())
    encoded_url = encoded_data.hexdigest()
    # encoded_url is 40 chars, using the first 6 for path
    unique_path = encoded_url[:6]

    # check to ensure the generated path isn't in the db
    does_unique_path_exist = Url_Model.query.filter_by(converted_url=unique_path).scalar()
    if does_unique_path_exist != None:
        generate_unique_path_part(url, Url_Model)
    else:
        return unique_path





