"use client";
import React from "react";

const ApiDocumentation = () => {
  return (
    <section className="min-h-screen bg-background text-text p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          وثائق واجهة برمجة التطبيقات (API)
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          هذه الوثيقة توضح كيفية استخدام واجهة برمجة التطبيقات الخاصة بالقرآن
          الكريم. يمكن استخدام هذه الواجهات لاسترجاع معلومات عن السور والآيات
          والمقاطع الصوتية والصفحات.
        </p>

        <h2 className="text-2xl font-semibold text-secondary mb-3">
          عنوان URL الأساسي
        </h2>
        <p className="text-lg mb-6">
          <code className="bg-gray-100 p-2 rounded">
            https://quran.i8x.net/
          </code>
        </p>

        <h2 className="text-2xl font-semibold text-secondary mb-3">
          المسارات المتاحة
        </h2>

        <div className="space-y-4">
          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              1. جلب جميع السور
            </h3>
            <p>
              مسار: <code>/surahs</code>
            </p>
            <p>هذا المسار يُستخدم لجلب قائمة بجميع السور في القرآن الكريم.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/surahs</code>
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              2. جلب سورة معينة
            </h3>
            <p>
              مسار: <code>/surah/:surah_id</code>
            </p>
            <p>
              يمكن استخدام هذا المسار لجلب سورة محددة عن طريق تحديد معرف السورة.
            </p>
            <p>
              مثال: <code>GET https://quran.i8x.net/surah/1</code> (لجلب سورة
              الفاتحة)
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              3. جلب جميع الآيات من سورة معينة
            </h3>
            <p>
              مسار: <code>/verses/:surah_id</code>
            </p>
            <p>يُستخدم هذا المسار لجلب جميع الآيات من سورة معينة.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/verses/1</code> (لجلب آيات
              سورة الفاتحة)
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              4. جلب آية معينة
            </h3>
            <p>
              مسار: <code>/verse/:surah_id/:verse_id</code>
            </p>
            <p>
              يمكن استخدام هذا المسار لجلب آية محددة عن طريق تحديد معرف السورة
              ومعرف الآية.
            </p>
            <p>
              مثال: <code>GET https://quran.i8x.net/verse/1/1</code> (لجلب الآية
              الأولى من سورة الفاتحة)
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              5. جلب آيات السجدة
            </h3>
            <p>
              مسار: <code>/sajda</code>
            </p>
            <p>يُستخدم هذا المسار لجلب جميع الآيات التي تحتوي على سجدة.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/sajda</code>
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              6. جلب مقطع صوتي لسورة معينة
            </h3>
            <p>
              مسار: <code>/audio/:surah_id</code>
            </p>
            <p>يمكن استخدام هذا المسار لجلب المقطع الصوتي لسورة معينة.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/audio/1</code> (لجلب مقطع
              صوتي لسورة الفاتحة)
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              7. جلب الآيات من جزء معين
            </h3>
            <p>
              مسار: <code>/juz/:juz_id</code>
            </p>
            <p>يُستخدم هذا المسار لجلب الآيات من جزء محدد.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/juz/1</code> (لجلب الآيات من
              الجزء الأول)
            </p>
          </div>

          <div className="bg-cardBg p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary">
              8. جلب الصفحة المرتبطة بآية معينة
            </h3>
            <p>
              مسار: <code>/pages/:surah_id/:verse_id</code>
            </p>
            <p>يتيح هذا المسار جلب الصفحة التي تحتوي على آية معينة.</p>
            <p>
              مثال: <code>GET https://quran.i8x.net/pages/1/1</code> (لجلب
              الصفحة التي تحتوي على الآية الأولى من سورة الفاتحة)
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-secondary mt-8 mb-3">
          مثال لاستخدام API
        </h2>
        <pre className="bg-gray-100 p-4 rounded-lg">
          <code>
            {`// مثال لجلب جميع السور
fetch('https://quran.i8x.net/api/surahs')
  .then(response => response.json())
  .then(data => console.log(data));`}
          </code>
        </pre>

        <p className="text-lg text-gray-600 mt-4">
          يمكنك استخدام كل من هذه المسارات حسب الحاجة لجلب المعلومات المطلوبة عن
          القرآن الكريم.
        </p>
      </div>
    </section>
  );
};

export default ApiDocumentation;
