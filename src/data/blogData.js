// Resimlerin import edildiğinden emin ol (Dosya yollarını kendi projene göre düzenle)
import blogImg1 from '../assets/images/blog/makale1.png'; 
import blogImg2 from '../assets/images/blog/makale1.png';
import blogImg3 from '../assets/images/blog/makale1.png';

export const blogData = [
  {
    id: 1,
    title: "Kan Sonuçlarınız Kalp Krizi Riskinizi Söylüyor Olabilir!",
    date: "25 Aralık 2025",
    category: "Kalp Sağlığı & Genetik",
    image: blogImg1,
    excerpt: "Kalp krizi çoğu zaman ani sanılır ama aslında önceden sinyal verir. Lp(a) testi ile gizli genetik riskinizi öğrenin.",
    content: `
      <p>Kalp krizi çoğu zaman ani sanılmaktadır. Oysa çoğu kriz önceden sinyal verir. Bu sinyallerin bir kısmı kan testlerinde gizlidir. Günümüzde kalp krizi riskini öngörmede klasik kolesterol ölçümleri yeterli değildir. Daha derin ve genetik temelli risk faktörleri önem kazanmıştır. Bunlardan biri <strong>Lipoprotein(a)</strong> yani Lp(a) değeridir. Bu değer, kolesterolden bağımsız çalışır. Tek sefer ölçülmesi yeterlidir. Yüksek olması ömür boyu risk anlamına gelir.</p>

      <h4>Lipoprotein(a) Nedir ve Neden Önemlidir?</h4>
      <p>Lipoprotein(a), genetik olarak belirlenen özel bir lipoproteindir. LDL kolesterole benzer bir yapısı vardır. Ancak daha tehlikelidir. Damar duvarında daha kolay birikir ve pıhtı oluşumunu tetikler. En önemli özelliği, yaşam tarzıyla kolay düşürülememesidir. Diyet ve egzersiz genellikle yeterli olmaz. Bu nedenle erken saptanması hayati önem taşır.</p>

      <h4>Kolesterolden Bağımsız Bir Risk Faktörü</h4>
      <p>Birçok hasta <strong>LDL kolesterolü</strong> normal olduğu halde kalp krizi geçirebilir. Bunun nedeni Lp(a) yüksekliği olabilir. Bu değer, total kolesterolden bağımsız çalışır. Normal kolesterol değerleri yanıltıcı olabilmektedir. Özellikle genç yaşta kalp krizi geçirenlerde sık görülmektedir. Ailesel erken kalp krizi öyküsü varsa mutlaka değerlendirilmelidir.</p>

      <h4>Kimler Lipoprotein(a) Testi Yaptırmalı?</h4>
      <ul>
        <li>Ailesinde genç yaşta (50 yaş altı) kalp krizi öyküsü olanlar.</li>
        <li>Kolesterolü normal olmasına rağmen damar tıkanıklığı yaşayanlar.</li>
        <li>Tekrarlayan stent veya bypass öyküsü olanlar.</li>
        <li>Açıklanamayan inme veya felç geçirenler.</li>
      </ul>

      <h4>Kalp Krizi %80 Önlenebilir Bir Hastalıktır</h4>
      <p>Kalp krizinin en sevindirici yönü önlenebilir olmasıdır. Risk faktörleri doğru yönetildiğinde krizlerin büyük bölümü engellenebilir. Yüksek tansiyon kontrol altına alınmalı, sigara bırakılmalı ve eğer <strong>Lp(a) yüksekliği</strong> varsa daha agresif bir tedavi planlanmalıdır.</p>

      <div class="doctor-note-box">
        <strong>Prof. Dr. Faruk Erzengin'in Notu:</strong>
        "Kalp krizi kader değildir. Bilgi en güçlü korunma aracıdır. Tek bir kan testi ile genetik haritanızı görün ve önleminizi erkenden alın."
      </div>
    `
  },
  {
    id: 2,
    title: "Sessiz Katil Hipertansiyon: Vücudunuza Neler Yapıyor?",
    date: "18 Aralık 2025",
    category: "Hipertansiyon",
    image: blogImg2,
    excerpt: "Hiçbir belirti vermeden böbreklerinizi çürütebilir ve kalbinizi yorabilir. Tansiyonunuzu kontrol altına almanın yolları.",
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
    id: 3,
    title: "Diyabetik Ayak ve Ampütasyon Riski: Kesilmek Kader Değil!",
    date: "05 Aralık 2025",
    category: "Diyabet & Yara Tedavisi",
    image: blogImg3,
    excerpt: "Diyabet hastalarının korkulu rüyası ayak yaraları, özel solüsyonlar ve doğru tedavi ile iyileştirilebilir.",
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
  id: 4,
  title: "Çarpıntı Ne Zaman Tehlikeli? 'Masum' ile 'Ciddi' Çarpıntıyı Ayırt Etme Rehberi",
  date: "10 Ocak 2025",
  category: "Aritmi & Kalp Ritim Bozuklukları",
  image: blogImg1, // blogImg4 olarak değiştirin
  excerpt: "Göğsünüzde kuş kanat çırpıyor gibi mi hissediyorsunuz? Her çarpıntı alarm nedeni değil, ancak hangi türü doktora koşmanız gerektiğini bilin.",
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
  id: 5,
  title: "Bacak Damar Tıkanıklığı: Yürürken Duran Kalçalarınızın Sessiz Çığlığı",
  date: "28 Aralık 2025",
  category: "Damar Sağlığı & Periferik Arter Hastalığı",
  image: blogImg1, // blogImg5 olarak değiştirin
  excerpt: "Bacak ağrınız sadece yorgunluk değil, kalbinizden uzaktaki damarların tıkandığının işareti olabilir. Kladikasyo ağrısı nedir, nasıl anlaşılır?",
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
  id: 6,
  title: "Aspirin Kullanmalı mıyım? Koruyucu Kalp Tedavisinde En Büyük Yanılgı",
  date: "15 Aralık 2025",
  category: "Koruyucu Kardiyoloji & İlaçlar",
  image: blogImg1, // blogImg6 olarak değiştirin
  excerpt: "Herkesin evinde bulunan bu küçük hap, bazıları için hayat kurtarıcıyken, bazıları için gereksiz kanama riski taşıyabilir. Aspirin profilaksisi ne zaman başlanmalı?",
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
  id: 7,
  title: "Kolesterol Düşman mı, Dost mu? İyi ve Kötü Kolesterol Efsaneleri",
  date: "02 Aralık 2025",
  category: "Kolesterol & Metabolizma",
  image: blogImg1, // blogImg7 olarak değiştirin
  excerpt: "Kolesterol kötü bir şey mi? HDL ve LDL gerçekte ne anlama geliyor? Statin ilaçları hakkında doğru bilinen yanlışları bu makalede çürütüyoruz.",
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