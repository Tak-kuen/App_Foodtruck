from selenium import webdriver
import time
import json
import os
import shutil
from selenium.common.exceptions import *

##====================================서울======================================
def seoul_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    seoul={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    driver.implicitly_wait(1)
    driver.get('http://www.seoul.go.kr/news/news_notice.do#list/1/srchBeginDt=20190101&srchEndDt=20190517&cntPerPage=10&srchText=%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD')
    driver.implicitly_wait(3)
    try :
        a = driver.find_elements_by_css_selector('#seoul-integrated-board > table > tbody > tr > td.sib-lst-type-basic-subject > a')
    except NoSuchElementException :
        print('항목이 없습니다.')
        region["region"]="seoul"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        for m in a:
            gosi_title = m
            print(m.text)
            seoul['post_title']=m.text
            print(m.get_attribute('data-code'))
            seoul['post_url']='http://www.seoul.go.kr/news/news_notice.do#view/'+m.get_attribute('data-code')
            arrays.append(seoul)
            seoul={}
        region["region"]="seoul"
        region["gonggo_list"]=arrays
        
    list_per_region.append(region)
##====================================서울======================================
    wrapper["regdate"]="ddd"
    wrapper["list"]=list_per_region
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_file:
        json.dump(wrapper, json_file,ensure_ascii=False)

    time.sleep(1)
    driver.quit()
    return repr(wrapper)
#=====================================서울======================================

##====================================경기======================================
def gyeonggi_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    gyeonggi={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    driver.implicitly_wait(3)
    driver.get('https://www.gg.go.kr/archives/category/sector_info/sector_info-economy/sector_info-economy-regulation/economy-regulatory_reform-m03?from_date=20180501&to_date=20190520&s_select=s_title&s_txt=#')
    driver.implicitly_wait(3)
    try:
        a = driver.find_elements_by_css_selector('#content-body > div > div.board-list.board-table.board-list-box > table > tbody > tr > td.board-default-td-title > a')
    except:
        print('항목이 없습니다.')
        region["region"]="gyeonggi"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        for m in a:
            gosi_title = m
            print(m.text)
            gyeonggi['post_title']=m.text
            print(m.get_attribute('href'))
            gyeonggi['post_url']=m.get_attribute('href')
            arrays.append(gyeonggi)
            gyeonggi={}
        region["region"]="gyeonggi"
        region["gonggo_list"]=arrays
        
##====================================경기======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)

    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)
        
    driver.quit()
    return repr(wrapper)
##====================================경기======================================

##====================================충북======================================
def chungbuk_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    chungbuk={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('http://www.chungbuk.go.kr/www/contents.do?key=1553')
    #iframe으로 이동
    search_frame = driver.find_element_by_css_selector('#contents > iframe')
    driver.switch_to_frame(search_frame)
    #날짜 설정
    start_date=driver.find_element_by_id('conIfmStdt')
    start_date.clear()
    start_date.send_keys('2019-01-01')
    end_date=driver.find_element_by_id('conIfmEnddt')
    end_date.clear()
    end_date.send_keys('2019-12-31') 
    #검색어 설정
    driver.find_element_by_id('conTitle').send_keys('푸드트럭')
    #검색
    driver.find_element_by_xpath('/html/body/form/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/a').click()
    #검색후 원래 프레임으로 복귀
    driver.implicitly_wait(3)
    try:
        a = driver.find_elements_by_css_selector('body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(2) > a')    
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="chungbuk"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        for m in a:
            gosi_title = m
            print(m.text)
            chungbuk['post_title']=m.text
            print(m.get_attribute('onclick'))
            sno=m.get_attribute('onclick')[10:15]
            print(sno)
            gosiGbn=m.get_attribute('onclick')[18:19]
            print(gosiGbn)
            chungbuk['post_url']= ('http://210.104.148.53/citynet/jsp/sap/SAPGosiBizProcess.do?'+
                                   'command=searchDetail&flag=gosiGL&svp=Y&sido=&sno='+sno+'&gosiGbn='+gosiGbn)
            arrays.append(chungbuk)
            chungbuk={}
        region["region"]="chungbuk"
        region["gonggo_list"]=arrays
##====================================충북======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)

    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)

    driver.switch_to_default_content()
    driver.quit()
    return repr(wrapper)
##====================================충북======================================


##====================================충남======================================
def chungnam_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    chungnam={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('http://www.chungnam.go.kr/cnnet/content.do?mnu_cd=CNNMENU01978')
    #iframe으로 이동
    search_frame = driver.find_element_by_css_selector('#contents > div.iframe > iframe')
    driver.switch_to_frame(search_frame)
    #날짜설정
    start_date=driver.find_element_by_id('conIfmStdt')
    start_date.clear()
    start_date.send_keys('2019-01-01')
    end_date=driver.find_element_by_id('conIfmEnddt')
    end_date.clear()
    end_date.send_keys('2019-12-31') 
    #검색어 설정
    driver.find_element_by_id('conTitle').send_keys('푸드트럭')
    #검색
    driver.find_element_by_xpath('/html/body/form/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td/table[2]/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/a').click()
    #검색후 원래 프레임으로 복귀
    driver.implicitly_wait(3)
    try:
        a = driver.find_elements_by_css_selector('body > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(2) > a')    
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="chungnam"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        for m in a:
            gosi_title = m
            print(m.text)
            chungnam['post_title']=m.text
            print(m.get_attribute('onclick'))
            sno=m.get_attribute('onclick')[10:15]
            print(sno)
            gosiGbn=m.get_attribute('onclick')[18:19]
            print(gosiGbn)
            chungnam['post_url']= ('http://210.95.181.39/citynet/jsp/sap/SAPGosiBizProcess.do?'+
                                   'command=searchDetail&flag=gosiGL&svp=Y&sido=cn&sno='+sno+'&gosiGbn='+gosiGbn)
            arrays.append(chungnam)
            chungnam={}
        region["region"]="chungnam"
        region["gonggo_list"]=arrays
##====================================충남======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)

    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)

    driver.switch_to_default_content()
    driver.quit()
    return repr(wrapper)
##====================================충남======================================


##====================================강원======================================
def gangwon_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    gangwon={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('http://www.provin.gangwon.kr/gw/portal/sub05_11')
    try:
        a = driver.find_elements_by_css_selector('#contents_area > div > div.board > div.board_list > table > tbody > tr > td:nth-child(2) > p > a')    
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="gangwon"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        for m in a:
            gosi_title = m
            print(m.text)
            gangwon['post_title']=m.text
            href=m.get_attribute('href')
            gangwon['post_url']= (href)
            arrays.append(gangwon)
            gangwon={}
        region["region"]="gangwon"
        region["gonggo_list"]=arrays
##====================================강원======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)
    driver.quit()
    return repr(wrapper)
##====================================강원======================================


##====================================부산======================================
def busan_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    busan={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('http://www.busan.go.kr/search/total?searchText=%ED%91%B8%EB%93%9C%ED%8A%B8%EB%9F%AD&preKwds=&search_category=bbsty&sub_category=&currentPage=1&orderBy=&index=&gpStartDate=&gpEndDate=&siteNo=')
    try:
        a = driver.find_elements_by_css_selector('#contents > div.section.board > div > ul > li > div > a')
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="busan"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        inc_num=1
        for m in a:
            xpath_str="//*[@id=\"contents\"]/div[2]/div/ul/li["+str(inc_num)+"]/div/span/span[1]"
            print(xpath_str)
            regdate=driver.find_element_by_xpath(xpath_str).text
            regdate=regdate[:4]
            print(regdate)
            if regdate == '2019' :
                gosi_title = m
                print(m.text)
                busan['post_title']=m.text
                href=m.get_attribute('href')
                busan['post_url']= (href)
                arrays.append(busan)
                busan={}
            inc_num = inc_num+1
        region["region"]="busan"
        region["gonggo_list"]=arrays
##====================================부산======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)
    driver.quit()
    return repr(wrapper)
##====================================부산======================================



##====================================대전======================================
def daejeon_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    daejeon={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('https://www.daejeon.go.kr/drh/MediaList.do?menuSeq=2558')
    #검색어 설정
    search_input=driver.find_element_by_id('searchKeyword')
    search_input.clear()
    search_input.send_keys('푸드트럭')
    driver.find_element_by_xpath('//*[@id="searchForm"]/div/table/tbody/tr[3]/td/input[2]').submit()
    try:
        a = driver.find_elements_by_css_selector('#content > div.new_bbs.mt30 > table > tbody > tr > td.al_left.subject > a')
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="daejeon"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        inc_num=1
        for m in a:
            xpath_str="//*[@id=\"content\"]/div[2]/table/tbody/tr["+str(inc_num)+"]/td[5]"
            print(xpath_str)
            regdate=driver.find_element_by_xpath(xpath_str).text
            regdate=regdate[:4]
            print(regdate)
            if regdate == '2019' :
                gosi_title = m
                print(m.text)
                daejeon['post_title']=m.text
                href=m.get_attribute('href')
                daejeon['post_url']= (href)
                arrays.append(daejeon)
                daejeon={}
            inc_num = inc_num+1
        region["region"]="daejeon"
        region["gonggo_list"]=arrays
##====================================대전======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)
    driver.quit()
    return repr(wrapper)
##====================================대전======================================



##====================================대구======================================
def daegu_gonggo():
    ## python파일 위치
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    print(BASE_DIR)

    ##저장용 json 가져오기
    wrapper={}
    list_per_region=[]
    region={}
    arrays=[]
    daegu={}

    ##헤드리스 크롬 설정
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('window-size=1920x1080')
    options.add_argument('disable-gpu')
    ##크롤링 해오기
    driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe', chrome_options=options)
    #driver = webdriver.Chrome('C:/Users/BON300-25/git/Yourfoodtruck/foodtruck/src/main/java/com/food/project/seleniumTest/chromedriver.exe')
    driver.implicitly_wait(3)
    driver.get('http://www.daegu.go.kr/sf-1/search/web/ko/search_page.jsp')
    #검색어 설정
    search_input=driver.find_element_by_id('query')
    search_input.clear()
    search_input.send_keys('푸드트럭')
    driver.find_element_by_xpath('//*[@id="search"]/div[1]/span/input').submit()
    driver.find_element_by_xpath('//*[@id="gnb"]/li[10]').click()
    try:
        a = driver.find_elements_by_css_selector('#content > div.section > ul > li > dl > dt > a')
    except NoSuchElementException:
        print('항목이 없습니다.')
        region["region"]="daegu"
        region["gonggo_list"]=None
    else:
        gosi_title = None
        inc_num=1
        for m in a:
            xpath_str="//*[@id=\"content\"]/div[2]/ul/li["+str(inc_num)+"]/dl/dt/span"
            print(xpath_str)
            regdate=driver.find_element_by_xpath(xpath_str).text
            regdate=regdate[:4]
            print(regdate)
            if regdate == '2019' :
                gosi_title = m
                print(m.text)
                daegu['post_title']=m.text
            #print(m.get_attribute('onclick'))
            #sno=m.get_attribute('onclick')[10:15]
            #print(sno)
                href=m.get_attribute('href')
            #print(gosiGbn)
                daegu['post_url']= (href)
                arrays.append(daegu)
                daegu={}
            inc_num = inc_num+1
        region["region"]="daegu"
        region["gonggo_list"]=arrays
##====================================대구======================================
    wrapper_String = open("./result.json","r",encoding="UTF8").read()
    wrapper = json.loads(wrapper_String)
    wrapper["regdate"]="dfdf"
    wrapper["list"].append(region)
    with open(os.path.join(BASE_DIR, 'result.json'), 'w+',encoding="UTF-8") as json_write_file:
        json.dump(wrapper, json_write_file,ensure_ascii=False)
    driver.quit()
    return repr(wrapper)
##====================================대구======================================


seoul_gonggo()
gyeonggi_gonggo()
chungbuk_gonggo()
chungnam_gonggo()
gangwon_gonggo()
busan_gonggo()
daejeon_gonggo()
daegu_gonggo()
