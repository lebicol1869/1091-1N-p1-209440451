function changelist(index) {
    const p = document.getElementById('class_list');
    switch (index) {
        case 1:
          p.innerHTML =
          '<li>課程名稱 : 靜態網頁設計</li><li>開課學系 : 資工進學一</li><li>授課教授 : 鐘興臺</li><li>上課教室 : E 201</li><li>學分數 : 自由選修 3 學分</li><div class="detail"><li>課程內容 :</li><liclass="title">本課程授課有兩大重點，期中考的重點主要以HTML5及CSS3為主，期中考後導入響應式網頁設計，以Bootstrap為主，並引導學生採用免費的Bootstraptemplate來時做期末project -- 響應式網頁。</li></div>';
          break;
        case 2:
          p.innerHTML =
          '<li>課程名稱 : 基礎電學</li><li>開課學系 : 電機進學一</li><li>授課教授 : 李慶烈</li><li>上課教室 : E 509</li><li>學分數 : 系必修 2 學分</li><div class="detail"><li>課程內容 :</li><liclass="title">讓學生瞭解電機工程之基本電學知識，包括：電壓與電流、電阻、歐姆定律、串聯電路分析並、聯電路分析、串並聯電路分析、網路理論、重疊定理、戴維寧定理以及諾頓定理。</li></div>';
          break;
        case 3:
          p.innerHTML =
          '<li>課程名稱 : 西洋歌劇欣賞入門</li><li>開課學系 : 藝術欣賞進學</li><li>授課教授 : 王淑堯</li><li>上課教室 : B 609</li><li>學分數 : 文學通識 2 學分</li><div class="detail"><li>課程內容 :</li><liclass="title">認識歌曲的基本要素，了解西洋歌劇史的發展與音樂大師的生平與代表性作品，找到歌曲欣賞的途徑與方法，分析與比較不同歌劇類型與風格，主動參加音樂藝術相關活動，對音樂與歌劇有更深的體驗與認知，提升欣賞音樂藝術與鑑賞能力，達到藝術之能與生活結合。</li></div>';
          break;
        case 4:
          p.innerHTML =
          '<li>課程名稱 : 電路設計軟體模擬</li><li>開課學系 : 電機進學班二</li><li>授課教授 : 陳界志</li><li>上課教室 : E 219</li><li>學分數 : 系必修 3 學分</li><div class="detail"><li>課程內容 :</li><liclass="title">學生能夠熟用Cadence OrCADPSpice所有功能，學生能夠自行設計電路並實現 ，學生能夠利用模擬工具驗證電路學所學知識。</li></div>';
          break;
        case 5:
          p.innerHTML =
          '<li>課程名稱 : 靜態網頁設計 (實習課)</li><li>開課學系 : 資工進學一</li><li>授課教授 : 助教</li><li>上課教室 : E 201</li><li>學分數 : 實習課 0 學分</li><div class="detail"><li>課程內容 :</li><liclass="title">本課程授課有兩大重點，期中考的重點主要以HTML5及CSS3為主，期中考後導入響應式網頁設計，以Bootstrap為主，並引導學生採用免費的Bootstraptemplate來時做期末project -- 響應式網頁。</li></div>';
          break;
    }
} 

document.querySelector('.class-click').addEventListener('click',() => {
    document.querySelector('.class_menu').classList.toggle('show');
    document.getElementById('class_list').innerHTML ='<li>點擊課程</li><li>取得詳情</li>';
})

