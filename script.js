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