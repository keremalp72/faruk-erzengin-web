import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uekcducwvvwzufzhlwhg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVla2NkdWN3dnZ3enVmemhsd2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxMzQwNDQsImV4cCI6MjA4ODcxMDA0NH0.lj3nMM2miYseaYtsnV6dU1P1Llz7-tjiGoiUi7P8vsE';
const supabase = createClient(supabaseUrl, supabaseKey);

const blogArticles = [
  {
    title: "Sessiz Katil Hipertansiyon: Vücudunuza Neler Yapıyor?",
    content: `
      <p>Hipertansiyon, yani yüksek tansiyon, dünya genelinde en yaygın görülen kronik hastalıklardan biridir. Ancak ne yazık ki hastaların büyük bir kısmı, tansiyon hastası olduğunun farkında bile değildir. Bu nedenle tıp literatüründe ona <strong>"Sessiz Katil" (Silent Killer)</strong> adı verilir. Yıllarca hiçbir belirti vermeden damarlarınızı tahrip edebilir.</p>
      <h4>Neden Belirti Vermez?</h4>
      <p>Vücudumuz muazzam bir adaptasyon yeteneğine sahiptir. Tansiyon yavaş yavaş yükseldiğinde, damarlar ve kalp bu duruma alışır. Kişi baş ağrısı veya burun kanaması gibi şikayetler hissetmeyebilir. Ancak hissetmemeniz, zarar görmediğiniz anlamına gelmez. Yüksek basınç, damar iç duvarını (endotel) zımpara kağıdı gibi aşındırır.</p>
      <h4>Vücutta Yarattığı Tahribatlar</h4>
      <ul>
        <li><strong>Kalp:</strong> Yüksek basınca karşı kan pompalamak zorunda kalan kalp kası kalınlaşır ve zamanla yetmezliğe girer.</li>
        <li><strong>Böbrekler:</strong> Vücudun filtresi olan böbreklerin ince damarları bozulur, diyaliz ihtiyacı doğabilir.</li>
        <li><strong>Beyin:</strong> İnce damarların çatlaması sonucu beyin kanaması veya tıkanıklığı (felç) riski artar.</li>
        <li><strong>Gözler:</strong> Retinadaki damarlar hasar görerek görme kaybına yol açabilir.</li>
      </ul>
      <h4>İlaçsız Tedavi Mümkün mü?</h4>
      <p>Erken evrede (Pre-hipertansiyon) yakalanırsa, yaşam tarzı değişiklikleri ile kontrol altına alınabilir. Tuz tüketimini günde 5 gramın altına düşürmek, düzenli yürüyüş yapmak ve kilo vermek mucizevi etkiler yaratır. Ancak hekiminiz ilaç önerdiyse, "alışkanlık yapar" korkusuyla ilacı reddetmek büyük bir hatadır. Modern tansiyon ilaçları organ koruyucu özelliklere sahiptir.</p>
    `
  },
  {
    title: "Diyabetik Ayak ve Ampütasyon Riski: Kesilmek Kader Değil!",
    content: `
      <p>Diyabet (Şeker Hastalığı), sadece kan şekerinin yükselmesi değildir. Zamanla vücuttaki tüm damar ve sinir ağını etkileyen sistemik bir hastalıktır. Diyabetin en yıkıcı sonuçlarından biri de "Diyabetik Ayak" yaralarıdır. Ne yazık ki dünyada her 30 saniyede bir, diyabete bağlı olarak bir ayak kaybedilmektedir.</p>
      <h4>Neden Yaralar İyileşmez?</h4>
      <p>Yüksek kan şekeri iki temel soruna yol açar:</p>
      <ol>
        <li><strong>Nöropati (Sinir Hasarı):</strong> Hasta ayağını hissetmez. Batan bir çivi, vuran bir ayakkabı acı vermez ve yara açılır.</li>
        <li><strong>Vaskülopati (Damar Hasarı):</strong> Ayağa giden kan akışı azalır. Kan gitmeyen doku beslenemez, oksijen alamaz ve iyileşemez.</li>
      </ol>
      <h4>Erzengin Solüsyonu ve Bütüncül Tedavi</h4>
      <p>Prof. Dr. Faruk Erzengin'in klinik tecrübeleriyle geliştirdiği tedavi protokolleri, "kesilmesi gerekir" denilen birçok uzvu kurtarmıştır. Tedavinin temelinde şunlar yatar:</p>
      <ul>
        <li><strong>Enfeksiyonla Mücadele:</strong> Özel formüle edilmiş solüsyonlar ile yara bölgesindeki mikrop yükü temizlenir.</li>
        <li><strong>Kanlanmanın Artırılması:</strong> Damar açıcı medikal tedaviler ve ozon terapisi gibi desteklerle dokuya oksijen taşınır.</li>
        <li><strong>Ölü Dokunun Temizlenmesi (Debridman):</strong> İyileşmeyi engelleyen ölü dokular cerrahi titizlikle uzaklaştırılır.</li>
      </ul>
      <h4>Erken Müdahale Hayat Kurtarır</h4>
      <p>Ayağınızda oluşan en ufak bir kızarıklık, nasır veya çatlak ihmal edilmemelidir. Diyabet hastaları her gün ayaklarını ayna yardımıyla kontrol etmeli, asla çıplak ayakla yürümemelidir. Unutmayın, doğru tedavi ile ampütasyon riski %90 oranında önlenebilir.</p>
    `
  },
  {
    title: "Çarpıntı Ne Zaman Tehlikeli? 'Masum' ile 'Ciddi' Çarpıntıyı Ayırt Etme Rehberi",
    content: `
    <p>Çarpıntı, kalp atışlarınızın normalden farklı, hızlı, güçlü veya düzensiz hissedilmesidir. Çoğu zaman stres, kafein veya yorgunluk kaynaklı masum bir durum olsa da, bazen ciddi bir kalp hastalığının ilk sinyali olabilir.</p>
    <h4>Masum (Benign) Çarpıntıların Özellikleri:</h4>
    <ul>
      <li><strong>Kısa sürelidir:</strong> Birkaç saniye veya dakika sürer, kendiliğinden geçer.</li>
      <li><strong>Tetikleyicisi bellidir:</strong> Aşırı kahve/çay, uykusuzluk, ani stres veya ağır bir yemek sonrası olur.</li>
      <li><strong>Beraberinde baş dönmesi, bayılma, şiddetli göğüs ağrısı YOKTUR.</strong></li>
    </ul>
    <h4>Tehlikeli Çarpıntıların Alarm Veren İşaretleri:</h4>
    <ul>
      <li>Çarpıntı sırasında veya sonrasında <strong>bayılma, bayılacak gibi olma hissi.</strong></li>
      <li>Göğüste <strong>ezici, baskı yapan bir ağrı</strong> ile birlikte olması.</li>
      <li>Nefes darlığının eşlik etmesi.</li>
      <li>Çarpıntının <strong>ani başlayıp ani bitmesi</strong> (adeta bir düğmeye basılmış gibi). Bu, atriyal fibrilasyon gibi ciddi bir ritim bozukluğuna işaret edebilir.</li>
      <li>Ailede <strong>ani kalp durması veya genç yaşta ölüm öyküsü</strong> varsa, her türlü çarpıntı ciddiye alınmalıdır.</li>
    </ul>
    <h4>Ne Yapmalısınız? Holter Monitor Testi</h4>
    <p>Şikayetlerinizi doktorunuza anlatmak önemlidir, ancak çoğu zaman çarpıntı muayene sırasında olmaz. Bu durumda <strong>24-48 saatlik Holter EKG</strong> ile kalbinizin günlük ritmini kaydetmek altın standarttır. Hatta bazen 2 haftaya kadar takılabilen olay kaydediciler de kullanılır.</p>
    <div class="doctor-note-box">
      <strong>Prof. Dr. Faruk Erzengin'in Notu:</strong>
      "Kalbinizin sesini dinleyin. Sadece metaforik olarak değil, gerçekten! Düzensiz attığını fark ederseniz, bu onun size gönderdiği bir mesajdır. Bu mesajı bir uzmana yorumlatmak, hayat kurtarıcı olabilir."
    </div>
  `
  },
  {
    title: "Bacak Damar Tıkanıklığı: Yürürken Duran Kalçalarınızın Sessiz Çığlığı",
    content: `
    <p>Periferik Arter Hastalığı (PAH), kalbi besleyen koroner damarlar gibi, bacakları besleyen atardamarların daralması veya tıkanmasıdır. En tipik belirtisi, <strong>"kladikasyo intermitan"</strong> denilen yürüme ağrısıdır. Bu ağrı, bir alarmdır.</p>
    <h4>Kladikasyo Ağrısının Özellikleri (Vitrin Belirtisi):</h4>
    <ul>
      <li><strong>Mesafe ayırt edicidir:</strong> Hasta belli bir mesafe yürüdükten sonra (örneğin 200 metre) baldır, uyluk veya kalçasında <strong>kramp tarzında, sıkıştırıcı bir ağrı</strong> hisseder.</li>
      <li><strong>Dinlenmekle geçer:</strong> Birkaç dakika durup dinlendiğinde ağrı tamamen kaybolur.</li>
      <li><strong>Aynı mesafede tekrarlar:</strong> Yeniden aynı mesafeyi yürümeye başlayınca ağrı aynı noktada geri gelir. Hasta sanki vitrinlere bakarak yürüyormuş gibi sık sık durmak zorunda kalır.</li>
    </ul>
    <h4>İleri Evredeki Tehlikeli İşaretler:</h4>
    <p>Eğer hastalık ilerlerse, ağrı dinlenme halindeyken de gelmeye başlar. Daha da kötüsü, <strong>iyileşmeyen ayak yaraları, kangren</strong> ve uzuv kaybı riski doğar. PAH, sadece bacakların değil, tüm vücut damar sisteminin (beyin, kalp) durumunun bir göstergesidir.</p>
    <h4>Tanı ve Tedavi: Sadece Ayaklarınız Değil, Kalbiniz de Riskte!</h4>
    <p>Tanı için basit ve ağrısız bir test olan <strong>"Ayak-Bileği Kol İndeksi (ABI)"</strong> ölçümü yapılır. Bacak damarlarının ultrasonografi (Doppler) ile görüntülenmesi de standarttır. Tedavi yaşam tarzı değişikliği (sigaranın bırakılması şart!), ilaç tedavisi ve gerekirse balon-stent veya bypass ameliyatlarını içerir.</p>
    <div class="doctor-note-box">
      <strong>Prof. Dr. Faruk Erzengin'in Notu:</strong>
      "Bacaklarınız, kalbinizin en uzaktaki temsilcileridir. Onların sesini duymazdan gelmek, kalbinizin sesini kısmakla eşdeğerdir. Yürürken durmak zorunda kalıyorsanız, bu bir tercih değil, damarlarınızdan gelen bir SOS sinyalidir."
    </div>
  `
  },
  {
    title: "Aspirin Kullanmalı mıyım? Koruyucu Kalp Tedavisinde En Büyük Yanılgı",
    content: `
    <p>"Günde bir baby aspirin kalp krizini önler" fikri uzun yıllar hakimdi. Ancak modern kardiyoloji, bu yaklaşımın <strong>herkes için geçerli olmadığını</strong> ve hatta bazı kişilerde zararlı olabileceğini net bir şekilde ortaya koymuştur.</p>
    <h4>Kimler KORUNMA AMAÇLI Aspirin Kullanmalı? (Birincil Koruma)</h4>
    <p>Daha önce kalp krizi, stent veya bypass öyküsü olmayan kişilerde, doktor tarafından çok özel şartlar bir araya gelmedikçe rutin aspirin önerilmemektedir. Önerilebilmesi için:</p>
    <ul>
      <li>Orta-yüksek risk grubunda olmak (risk hesaplamaları ile belirlenir).</li>
      <li>Kanama riskinin (mide ülseri, kanama bozukluğu vs.) düşük olması.</li>
      <li>Genellikle <strong>40-70 yaş aralığında</strong> olmak.</li>
    </ul>
    <p><strong>70 yaş üstü sağlıklı bireylerde</strong> koruyucu aspirin kanama riskini artırdığı için genellikle başlanmaz.</p>
    <h4>Kimler KESİNLİKLE Aspirin Kullanmalı? (İkincil Koruma)</h4>
    <p>Daha önce <strong>kalp krizi geçirmiş, stent takılmış veya bypass olmuş</strong> hastalarda aspirin (genellikle başka bir kan sulandırıcı ile birlikte) hayat kurtarıcıdır ve <strong>doktor önerisi olmadan ASLA bırakılmamalıdır.</strong></p>
    <h4>Aspirin ve Kanama Riski: İnce Çizgi</h4>
    <p>Aspirin mide-bağırsak kanaması ve beyin kanaması riskini hafif artırır. Bu nedenle, aspirin kullanmanın faydasının (kalp krizini önleme), riskinden (ciddi kanama) fazla olup olmadığı hesaplanmalıdır. Bu kararı <strong>siz değil, kardiyoloji uzmanınız</strong> tüm tıbbi öykünüzü değerlendirerek vermelidir.</p>
    <div class="doctor-note-box">
      <strong>Prof. Dr. Faruk Erzengin'in Notu:</strong>
      "Aspirin bir şeker değildir, güçlü bir ilaçtır. Komşunuz için iyi olan, sizin için zehir olabilir. 'Koruyucu' olduğu düşünülen bir ilaçla, 'hasar verici' konuma geçmemek için, bu kararı kendi başınıza değil, damar haritanızı bilen bir uzmanla verin."
    </div>
  `
  },
  {
    title: "Kolesterol Düşman mı, Dost mu? İyi ve Kötü Kolesterol Efsaneleri",
    content: `
    <p>Kolesterol, vücudumuzdaki tüm hücre zarının yapı taşı, D vitamini ve bazı hormonların üretimi için temel bir maddedir. Yani, hayati öneme sahiptir. Sorun, kolesterolün <strong>miktarı ve taşındığı araçlarla (lipoproteinler)</strong> ilgilidir.</p>
    <h4>LDL (Kötü Kolesterol) Gerçekten Ne Kadar Kötü?</h4>
    <p>LDL, kolesterolü damar duvarına taşıyan kamyondur. Sayısı çok fazla olursa veya kamyonun yapısı bozuksa (oksitlenmiş LDL), damar duvarına kolesterol yükünü bırakır ve plak oluşumunu başlatır. Ancak, <strong>her yüksek LDL, hemen ilaç gerektirmez.</strong> Risk hesaplaması (yaş, cinsiyet, sigara, tansiyon vb.) ile birlikte değerlendirilir.</p>
    <h4>HDL (İyi Kolesterol) Gerçekten Ne Kadar İyi?</h4>
    <p>HDL, ters yönde çalışan bir temizlik aracı gibidir; damar duvarındaki fazla kolesterolü alıp karaciğere geri taşır. Yüksek HDL genellikle iyi bir işarettir. Ancak, son çalışmalar HDL'yi yükselten ilaçların kalp krizini azaltmadığını göstermiştir. Yani, <strong>HDL'yi ilaçla yükseltmek hedef değildir.</strong> Onun yüksek olması, sağlıklı bir yaşam tarzının sonucudur.</p>
    <h4>Statin Korkusu: Yan Etkiler Abartılıyor mu?</h4>
    <p>Statinler, karaciğerde kolesterol yapımını bloke eden en etkili ilaç grubudur. Kas ağrısı en sık bildirilen yan etkidir, ancak gerçek sıklığı çok daha düşüktür. Çoğu hastada düşük dozla başlanarak veya farklı bir statin denenerek bu sorun aşılabilir. Unutmayın, statinler sadece kolesterolü düşürmez, damar içindeki <strong>plakları stabilize ederek yırtılma ve kalp krizi riskini azaltır.</strong></p>
    <h4>Kolesterol Yönetiminde Altın Kurallar</h4>
    <ol>
      <li>Hedef LDL değeriniz, mevcut riskinize göre belirlenir. 'Normal' aralık herkes için aynı değildir.</li>
      <li>İlaç kararı sadece rakama değil, toplam kalp-damar riskine göre verilir.</li>
      <li>Diyette doymuş yağları (katı yağlar, kırmızı et) azaltmak, lifli gıdaları artırmak temel yaklaşımdır.</li>
    </ol>
  `
  }
];

const pressNewsData = [
  { title: "Türk Doktordan Tıpta Devrim: Erzengin Solüsyonu", summary: "Prof. Dr. Faruk Erzengin’in geliştirdiği ilaç, damar sertliğini gerileterek literatüre girdi ve 25 bine yakın hastayı ameliyattan kurtardı." },
  { title: "Tıpta Nobellik Buluş", summary: "Prof. Dr. Faruk Erzengin ve ekibi, damar sertliği tedavisinde dünya literatürüne giren buluşa imza attı." },
  { title: "Nobel'e Aday Gösterilen Türk Profesör", summary: "32 kişilik bilim kurulu ile yürütülen çalışmalar, Prof. Erzengin'i Nobel Tıp Ödülü adaylığına taşıdı." },
  { title: "Kalp Krizini Önlemek Mümkün Mü?", summary: "Prof. Dr. Erzengin, kalp sağlığını korumak için 5 altın kuralı ve soğuk havalarda dikkat edilmesi gerekenleri anlattı." },
  { title: "Covid-19'a Dair Önemli Bilgiler", summary: "Prof. Dr. Erzengin, Covid-19'a dair dikkat edilmesi gereken önemli bilgileri anlattı." },
  { title: "Vatandaş için çalışan Cesur Yürek", summary: "Hem müthiş bir hekim hem de çok donanımlı bir insandır, O'nu tanımak büyük şanstır, şimdi bazı hastalarının dile getirdiği teşekkürlere aşağıda yer verdik, o kadar çok hastaya şifa oldu ki maşallah hepsine yer versek gazetemizin sayfaları yetmez. Buyurun." }
];

async function fix() {
  await supabase.auth.signInWithPassword({ email: 'admin@farukerzengin.com', password: 'faruk123' });
  
  // Update blogs
  for (let b of blogArticles) {
    const { data: existing } = await supabase.from('articles').select('id').eq('title', b.title);
    if (existing && existing.length > 0) {
      await supabase.from('articles').update({ content: b.content }).eq('id', existing[0].id);
      console.log('Updated blog:', b.title);
    }
  }

  // Update press
  for (let p of pressNewsData) {
    const { data: existing } = await supabase.from('press_news').select('id').eq('title', p.title);
    if (existing && existing.length > 0) {
      await supabase.from('press_news').update({ summary: p.summary }).eq('id', existing[0].id);
      console.log('Updated press:', p.title);
    }
  }

  process.exit(0);
}

fix();
