import hashlib
import uuid

def generate_unqiue_path_part(url):
    unqiue_id = uuid.uuid4()
    unqiue_url = url + str(unqiue_id)
    encode_data = hashlib.sha1(unqiue_url.encode())
    encode_url = encode_data.hexdigest()
    return(encode_url[:6])
