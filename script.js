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

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#modal');
    const openModalButtons = document.querySelectorAll('.openModalBtn');
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.classList.add('no-scroll');
        });
    });
    modal.addEventListener('click', (event) => {
        if(event.target === modal){
            modal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});

const languageFilter = document.querySelector('#language_filter');
if(languageFilter){
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
}
        