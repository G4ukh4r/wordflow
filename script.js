let questions = document.querySelectorAll('.faq_question');
questions.forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        document.querySelectorAll('.faq_item').forEach((item) =>{
            if (item !== faqItem){
                item.classList.remove('active');
            }
        });
        faqItem.classList.toggle('active');
    });
});

const languageFilter = document.querySelector('#language_filter');
const teachers = document.querySelectorAll('.teacher');
function filterTeachers(){
    const selectedLang = languageFilter.value;
    teachers.forEach((teacher) => {
        const language = teacher.getAttribute('data-language');
        if (selectedLang === '' || language === selectedLang) {
            teacher.classList.add('visible');
          } else {
            teacher.classList.remove('visible');
          }
    });
}
languageFilter.addEventListener('change', filterTeachers);
filterTeachers();