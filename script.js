function showResult() {
  const skinType = document.getElementById("skinType").value;
  const resultDiv = document.getElementById("result");
  let content = "";

  switch (skinType) {
    case "جافة":
      content = `
        <h2>✨ صابونة زيت الزيتون</h2>
        <ul>
          <li>زيت الزيتون، الجلسرين، فيتامين E</li>
          <li>ترطيب عميق</li>
          <li>تقليل التشققات</li>
          <li>مناسبة للبشرة الحساسة</li>
        </ul>`;
      break;
    case "دهنية":
      content = `
        <h2>✨ صابونة الكبريت</h2>
        <ul>
          <li>الكبريت، زيت شجرة الشاي</li>
          <li>تقليل الزيوت</li>
          <li>علاج حب الشباب</li>
          <li>تنقية المسام</li>
        </ul>`;
      break;
    case "مختلطة":
      content = `
        <h2>✨ صابونة الفحم النشط</h2>
        <ul>
          <li>الفحم، زيت اللافندر</li>
          <li>تنظيف عميق</li>
          <li>تهدئة الجفاف</li>
          <li>موازنة الدهون</li>
        </ul>`;
      break;
    case "حساسة":
      content = `
        <h2>✨ صابونة الشوفان</h2>
        <ul>
          <li>الشوفان، البابونج، زبدة الشيا</li>
          <li>تهدئة الاحمرار</li>
          <li>ترطيب خفيف</li>
          <li>بدون عطور</li>
        </ul>`;
      break;
    default:
      content = `
        <h2>✨ صابونة الجليسرين</h2>
        <ul>
          <li>الجليسرين، زيت جوز الهند</li>
          <li>ترطيب متوازن</li>
          <li>تنظيف لطيف</li>
          <li>يحافظ على التوازن</li>
        </ul>`;
  }

  resultDiv.innerHTML = content;
}
