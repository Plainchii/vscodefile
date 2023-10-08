import json  
import requests  
from requests.exceptions import RequestException  
import re  
import time  
#爬取书名与价格
def get_one_page(url):  

    try:  
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36'  
        }
        response = requests.get(url, headers=headers)  
        if response.status_code == 200:  
            return response.text  
        return None
    except RequestException:  
        return None

def parse_one_page(html):    
    items = re.findall('<li.*?<h3><a.*?>(.*?)</a>.*?price_color">(.*?)</p>',html,re.S)

    for item in items:  
        yield {'name': item[0],  
            'price': item[1]
        }  

def write_to_file(content):  
    with open('result.txt', 'a', encoding='utf-8') as f:  
        f.write(json.dumps(content, ensure_ascii=False) + '\n')  


url = 'https://books.toscrape.com'
html = get_one_page(url)
print("start scraping...")
for item in parse_one_page(html):  
    print(item)  
    write_to_file(item)  
