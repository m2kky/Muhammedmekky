const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const { GoogleGenerativeAI } = require("@google/generative-ai");

// جلب مفتاح Gemini API من إعدادات Firebase
const genAI = new GoogleGenerativeAI(functions.config().gemini.key);

exports.chatWithGemini = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const { message } = req.body;

    try {
      // استدعاء موديل Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // إرسال الرسالة للموديل والحصول على الرد
      const result = await model.generateContent(message);
      const response = await result.response;
      const text = response.text();

      // إرسال الرد النهائي للفرونت
      res.status(200).json({ reply: text });
    } catch (error) {
      console.error(error);
      res.status(500).send("حصل خطأ في الاتصال بـ Gemini");
    }
  });
});
