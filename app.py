from flask import Flask, send_file, request, jsonify
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configuration
API_HOST = os.getenv("RAPIDAPI_HOST", "privatix-temp-mail-v1.p.rapidapi.com")
API_KEY = os.getenv("RAPIDAPI_KEY")
API_BASE_URL = f"https://{API_HOST}/request"

if not API_KEY:
    print("Warning: RAPIDAPI_KEY not set in environment variables.")

@app.route('/')
def index():
    return send_file('Index.html')

@app.route('/request/<path:endpoint>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def proxy_request(endpoint):
    target_url = f"{API_BASE_URL}/{endpoint}"
    
    headers = {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
    }
    
    try:
        # Forward the request to RapidAPI
        resp = requests.request(
            method=request.method,
            url=target_url,
            headers=headers,
            params=request.args,
            json=request.get_json(silent=True)
        )
        
        # Return the response from RapidAPI
        # Filter headers to avoid transfer-encoding issues with Flask
        excluded_headers = ['content-encoding', 'content-length', 'transfer-encoding', 'connection']
        headers = [(name, value) for (name, value) in resp.headers.items()
                   if name.lower() not in excluded_headers]
        
        return (resp.content, resp.status_code, headers)
        
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print(f"Starting server... API Key present: {bool(API_KEY)}")
    app.run(debug=True, port=5500)
