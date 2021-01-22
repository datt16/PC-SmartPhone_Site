const data = [
  {
    id: 'AQUOS-sense4',
    name: 'AQUOS sense4',
    height: 148,
    width: 71,
    thickness: 8.9,
    weight: 177,
    screen: 5.8,
    image: '/AQUOS-sense4.jpg',
    type: 'mobile',
    cpu: 'Snapdragon',
    ram: '4GB',
    storage: '64GB',
    battery: '4570mAh',
    camera: ['広角: 800万画素', '望遠: 800万画素'],
    biometrics: ['指紋', '顔'],
    ipCode: 'IPX8',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['Sharp', 'Android', 'AQUOS'],
    content: '# AQUOS sense4\n\n## 発売日時\n\n- 2020 年 11 月 6 日\n\n## 特徴\n\n### 長所\n\n- バッテリーが優秀で長持ちする\n- サイズが小型で軽量\n\n### 短所\n\n- カメラ性能が普通\n',
  },
  {
    id: 'AQUOS-zero5G-basic',
    name: 'AQUOS zero5G basic',
    height: 161,
    width: 75,
    thickness: 9.0,
    weight: 182,
    screen: 6.4,
    image: '/AQUOS-zero5G-basic.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 765',
    ram: '8GB',
    storage: '128GB',
    battery: '4050mAh',
    camera: ['広角: 1310万画素', '望遠: 800万画素'],
    biometrics: ['指紋', '顔'],
    ipCode: 'IP5X',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['Sharp', 'Android', 'AQUOS'],
    content: '# AQUOS zero5G basic\n\n## 発売日時\n\n- 2020 年 10 月 9 日\n\n## 特徴\n\n### 長所\n\n- イヤホンジャック搭載や指紋認証など使いやすい\n- バッテリーが優秀\n\n### 短所\n\n- 重量が 182g と重め\n',
  },
  {
    id: 'Galaxy-S20',
    name: 'Galaxy S20',
    height: 158,
    width: 74,
    thickness: 7.8,
    weight: 163,
    screen: 6.7,
    image: '/Galaxy-S20.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 865',
    ram: '12GB',
    storage: '128GB',
    battery: '4000mAh',
    camera: ['広角: 1200万画素', '望遠: 6400万画素'],
    biometrics: ['指紋', '顔'],
    ipCode: 'IP68',
    hasEarphone: false,
    charge: 'Type-C',
    tags: ['Samsung', 'Android', 'Galaxy'],
    content: '# Galaxy S20\n\n## 発売日時\n\n- 2020 年 2 月 11 日\n\n## 特徴\n\n### 長所\n\n- 画面が比較的大きい\n- トリプルカメラ搭載\n\n### 短所\n\n- 重く、少し持ちづらい\n- 価格が高め\n',
  },
  {
    id: 'Google-Pixel-5',
    name: 'Google Pixel 5',
    height: 144.7,
    width: 70.4,
    thickness: 8.0,
    weight: 151,
    screen: 6.0,
    image: '/Google-Pixel-5.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 765G',
    ram: '8GB',
    storage: '128GB',
    battery: '4080mAh',
    camera: ['広角: 1220万画素', '超広角: 1600万画素'],
    biometrics: ['指紋'],
    ipCode: 'IP5X',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['Google', 'Android', 'Google Pixel'],
    content: '# Google Pixel 5\n\n## 発売日時\n\n- 2020 年 10 月 15 日\n\n## 特徴\n\n### 長所\n\n- Google サービスとの連携に強い\n- 大きさがコンパクト\n\n### 短所\n\n- 4 と比べ cpu などのスペックが少し低め\n',
  },
  {
    id: 'HUAWEI-P30-lite',
    name: 'HUAWEI P30 lite',
    height: 153,
    width: 73,
    thickness: 7.4,
    weight: 159,
    screen: 6.1,
    image: '/P30-Lite.jpg',
    type: 'mobile',
    cpu: 'Kirin 710',
    ram: '4GB',
    storage: '128GB',
    battery: '3340mAh',
    camera: ['広角: 2400万画素', '望遠: 800万画素'],
    biometrics: ['指紋', '顔'],
    ipCode: 'IP5X',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['HUAWEI', 'Android'],
    content: '# Galaxy S20\n\n## 発売日時\n\n- 2019 年 8 月 8 日\n\n## 特徴\n\n### 長所\n\n- 非常に安価\n- 被写界深度レンズという特殊なレンズがある\n\n### 短所\n\n- 発売が 2019 年のため古い機種\n',
  },
  {
    id: 'MacBook-Pro',
    name: 'MacBook Pro',
    height: 0,
    width: 0,
    thickness: 0,
    weight: 0,
    screen: 0,
    image: '/MacBook-Pro.jpg',
    type: 'pc',
    cpu: '',
    ram: '',
    storage: '',
    battery: '',
    camera: [],
    biometrics: [],
    ipCode: '',
    hasEarphone: false,
    charge: '',
    tags: ['Apple', 'Mac', 'macOS', 'Latest'],
    content: '# MacBook Pro\n\nMacBook Pro は，Apple社製のラップトップ型コンピュータです．\n',
  },
  {
    id: 'ROG-Phone-3',
    name: 'ROG Phone 3',
    height: 171,
    width: 78,
    thickness: 7.9,
    weight: 240,
    screen: 6.6,
    image: '/ROG-Phone.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 865 Plus',
    ram: '12GB',
    storage: '512GB',
    battery: '6000mAh',
    camera: ['広角: 1200万画素', '望遠: 6400万画素'],
    biometrics: ['指紋'],
    ipCode: 'IP5X',
    hasEarphone: false,
    charge: 'Type-C',
    tags: ['ASUS', 'Android', 'Rog'],
    content: '# Rog Phone3\n\n## 発売日時\n\n- 2020 年 9 月 26 日\n\n## 特徴\n\n### 長所\n\n- ゲーミングスマートフォン\n- 60000mAh もの大容量バッテリー\n\n### 短所\n\n- 非常に高価\n- サイズが大きく重い\n',
  },
  {
    id: 'XPS-13',
    name: 'XPS 13',
    height: 0,
    width: 0,
    thickness: 0,
    weight: 0,
    screen: 0,
    image: '/XPS-13.jpg',
    type: 'pc',
    cpu: '',
    ram: '',
    storage: '',
    battery: '',
    camera: [],
    biometrics: [],
    ipCode: '',
    hasEarphone: false,
    charge: '',
    tags: ['Dell', 'Windows', 'Latest'],
    content: '# XPS 13\n\nXPS は、Dell（デル）のパーソナルコンピュータの一つである。 eXtreme Performance System の略。\n\n元々は、デスクトップ向けの Dimension シリーズの上位機種として発売され、後にノートブック向けの Inspiron シリーズの上位機種として投入される。今後は「Alienware」が後継シリーズとして投入する事が決定された為に XPS シリーズはミドルレンジのデスクトップとして存続していく方向である。\n',
  },
  {
    id: 'Xperia-10-2',
    name: 'Xperia 10 Ⅱ',
    height: 151,
    width: 67.3,
    thickness: 7.3,
    weight: 148,
    screen: 4.7,
    image: '/Xperia-10-2.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 665',
    ram: '4GB',
    storage: '64GB',
    battery: '3600mAh',
    camera: ['広角: 800万画素', '望遠: 800万画素'],
    biometrics: ['指紋'],
    ipCode: 'IPX5/IPX8/IP6X',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['Sony', 'Android', 'Xperia'],
    content: '# Xperia 10 Ⅱ\n\n## 発売日時\n\n- 2020 年 5 月 29 日\n\n## 特徴\n\n### 長所\n\n- 軽量でコンパクト\n- マルチウインドウを使いやすい\n\n### 短所\n\n- カメラ性能はそこそこ\n- サイズが縦長のため慣れが必要\n',
  },
  {
    id: 'Xperia-5-2',
    name: 'Xperia5 Ⅱ',
    height: 158,
    width: 68,
    thickness: 9.1,
    weight: 163,
    screen: 6.1,
    image: '/Xperia-5-2.jpg',
    type: 'mobile',
    cpu: 'Snapdragon 865',
    ram: '8GB',
    storage: '128GB',
    battery: '4000mAh',
    camera: ['広角: 1220万画素', '望遠: 1220万画素'],
    biometrics: ['指紋'],
    ipCode: 'IP5X/IPX8/IP6X',
    hasEarphone: true,
    charge: 'Type-C',
    tags: ['Sony', 'Android', 'Xperia'],
    content: '# Xperia5 Ⅱ\n\n## 発売日時\n\n- 2020 年 10 月 17 日\n\n## 特徴\n\n### 長所\n\n- 軽量でコンパクト\n- マルチウインドウを使いやすい\n\n### 短所\n\n- カメラ性能はそこそこ\n- サイズが縦長のため慣れが必要\n',
  },
  {
    id: 'iPad-Pro',
    name: 'iPad Pro',
    height: 0,
    width: 0,
    thickness: 0,
    weight: 0,
    screen: 0,
    image: '/iPad-Pro.jpg',
    type: 'pc',
    cpu: '',
    ram: '',
    storage: '',
    battery: '',
    camera: [],
    biometrics: [],
    ipCode: '',
    hasEarphone: false,
    charge: '',
    tags: ['Apple', 'iPad', 'iOS', 'Latest'],
    content: '# iPad Pro\n\n**iPad Pro**（アイパッド プロ）はアップルが開発、販売するタブレット型コンピュータである。iPadシリーズにおける最上位モデルとなっている。  \n\n## 沿革\n\n### 2015年\n\n- 9月9日（現地時間）、アメリカ・カリフォルニア州サンフランシスコのBill Graham Civic Auditoriumで開催された「Special Event September 2015」で12.9インチ版を発表、同年11月11日に発売された\n\n### 2016年\n\n- 3月21日（現地時間）、スペシャルイベントの基調講演で、9.7インチ版が追加発表された[3]。同日、12.9インチ版の256GBモデルが追加された。\n\n### 2017年\n\n- 6月5日（現地時間）、WWDC 2017で12.9インチ版の第2世代と10.5インチ版が追加発表され、9.7インチ版の販売が終了された。\n\n### 2018年\n\n- 10月30日（現地時間）、スペシャルイベントで、狭額ベゼルのLiquid Retinaディスプレイを搭載し、ホームボタンが廃止されFace IDを搭載した11インチ版と12.9インチ版とそれら専用の新しいApple Pencil（第2世代）とSmart Keyboard Folioが発表された。\n\n### 2020年\n\n- 3月18日（現地時間）、A12XからGPUを一つ増やしたA12Z Bionic、2つの広角カメラとToF方式のLiDARスキャナを搭載した11インチと12.9インチのiPad Proが、Multi-Touchトラックパッドが搭載されたMagic Keyboardと共に発表された[4]。\n',
  },
  {
    id: 'iPhone-11',
    name: 'iPhone 11',
    height: 150.9,
    width: 75.7,
    thickness: 8.3,
    weight: 194,
    screen: 6.1,
    image: '/iPhone-11.jpg',
    type: 'mobile',
    cpu: 'A13 Bionic',
    ram: '不明',
    storage: '64GB 128GB 256GB',
    battery: '3110mAh',
    camera: ['広角: 1200万画素', '超広角: 1200万画素'],
    biometrics: ['顔'],
    ipCode: 'IP68',
    hasEarphone: false,
    charge: 'Lightning',
    tags: ['Apple', 'iOS', 'iPhone'],
    content: '# iPhone 11\n\n## 発売日時\n\n- 2019 年 9 月 20 日\n\n## 特徴\n\n### 長所\n\n- 画面が比較的大きい\n- トリプルカメラ搭載\n\n### 短所\n\n- 重く、少し持ちづらい\n- 指紋認証がなくなった\n',
  },
  {
    id: 'iPhone-12',
    name: 'iPhone 12',
    height: 146.7,
    width: 71.5,
    thickness: 7.4,
    weight: 162,
    screen: 6.1,
    image: '/iPhone-12.jpg',
    type: 'mobile',
    cpu: 'A14Bionicチップ',
    ram: '4GB',
    storage: '64GB 128GB 256GB',
    battery: '3110mAh',
    camera: ['広角: 1200万画素', '望遠: 1200万画素'],
    biometrics: ['顔'],
    ipCode: 'IP68',
    hasEarphone: false,
    charge: 'Lightning',
    tags: ['Apple', 'iOS', 'iPhone'],
    content: '# iPhone 12\n\n## 発売日時\n\n- 2020 年 10 月 23 日\n\n## 特徴\n\n### 長所\n\n- 11 より小型で高性能\n- カメラ性能の向上\n\n### 短所\n\n- イヤホンジャックがない\n- 指紋認証がない\n',
  },
  {
    id: 'iPhone-SE',
    name: 'iPhone SE',
    height: 138.4,
    width: 67.3,
    thickness: 7.3,
    weight: 148,
    screen: 4.7,
    image: '/iPhone-SE.jpg',
    type: 'mobile',
    cpu: 'A13Bionicチップ',
    ram: '12GB',
    storage: '64GB 128GB 256GB',
    battery: '1821mAh',
    camera: ['広角: 1200万画素', '望遠: 1200万画素'],
    biometrics: ['顔'],
    ipCode: 'IP67',
    hasEarphone: false,
    charge: 'Lightning',
    tags: ['Apple', 'iOS', 'iPhone'],
    content: '# iPhone SE\n\n## 発売日時\n\n- 2020 年 4 月 24 日\n\n## 特徴\n\n### 長所\n\n- 小型でコンパクト\n- 非常に安価で高性能\n\n### 短所\n\n- イヤホンジャックがない\n',
  },
  {
    id: 'iPhone-X',
    name: 'iPhone X',
    height: 0,
    width: 0,
    thickness: 0,
    weight: 0,
    screen: 0,
    image: '/iPhone-X.jpg',
    type: 'mobile',
    cpu: '',
    ram: '',
    storage: '',
    battery: '',
    camera: [],
    biometrics: [],
    ipCode: '',
    hasEarphone: false,
    charge: '',
    tags: ['Apple', 'iPhone', 'iOS', 'Previous'],
    content: '# iPhone X\n\n**iPhone X**（アイフォーン テン）は、アップルが開発・販売していたスマートフォンである。\n\niPhone Xは、2017年9月12日（現地時間）、アメリカ・カリフォルニア州クパティーノのSteve Jobs Theaterで初開催されたアップルのスペシャルイベントの最後「One more thing...」で発表された。\n\n2017年10月27日から予約開始。耐水・防塵はIP67等級を有している。\n\niPhone Xの外観は前面がOLEDディスプレイで覆われており、背面がガラスパネルになったことでワイヤレス給電規格のQiに対応した。これによりQi対応のワイヤレス充電器や、アップルから発売予定のAirPowerによりワイヤレス充電が可能になる。しかし、2019年3月29日(現地時間)に、AirPowerの開発中止が発表された。iPhone 4s以前で採用されていた、ステンレス製のフレームを採用している。頑丈で 、アルミニウムフレームにはない光沢が得られている。ステンレスのカラーはシルバーの一色だけである。CPUにはApple A11 Bionicが採用。Face IDと呼ばれる顔だけでロックを解除することができる新たな認証システムを採用。さらにアニ文字と呼ばれる機能が搭載されている。これらの機能は新しく採用されたTrueDepthカメラによって実現されているため、iPhone X、iPhone XS、XS Max、XRのみで利用できる。\n\n2018年9月13日のiPhone XS、XS Max、XRの発表と同時に公式ホームページからの販売は終了したが、アップル取扱店では販売を継続している。  \n',
  },
]

export default data
