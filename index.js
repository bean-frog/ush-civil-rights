// content array for easy editing

const content = [
  {
        "id":"1",
        "align": "c",
        "title": "LatinX Civil Rights",
        "contentHTML": ""
    },
   {
        "id":"2",
        "align": "c",
        "title": "Introduction",
        "contentHTML": "The history of LatinX civil rights in the United States is an extensive history, marked with several significant milestones that have contributed to the identities and experiences of many LatinX people and communities. Since the early 20th century, LatinX people have fought for their equality, justice and representation, focusing on a range of issues and using varying methods. This short presentation will go over 3 key events in LatinX civil rights history, and an interactive map with some more points of inteerst will be available at the end."
    },
    {
        "id":"3",
        "align": "r",
        "title": "1911 - El Primer Congreso Mexicanista",
        "contentHTML": "<span style='font-style: italic'>El Primer Congreso Mexicanista</span>, or the First Mexican Congress, was formed in 1911 and met in Laredo, Texas to discuss socioeconomic and educational issues affecting Mexican-Americans. It also served to express the discontent at the exploitation of laborers, segregation, and lynchings by Texans against the Mexican-Americans. "
    },
    {
        "id":"4",
        "align": "l",
        "title": "1941 - Fair Employment Practices Committee",
        "contentHTML": "The Fair Employment Practices Committee, or FEPC, was created in 1941 by Franklin Delano Roosevelt to aid in the implementation of Executive Order 8802, aiming to '[ban] all discriminatory employment practices by Federal agencies, as well as all unions and companies engaged in war related work.' This order improved workplace quality for almost all marginalized groups, including African and Mexican-Americans. This also handled any reports of workplace discrimination, of which Latino workers filed over 1/3."
    },
    {
        "id":"5",
        "align": "r",
        "title": "1945 - Mendez v. Westminster",
        "contentHTML": "The 1945 Mendez v. Westminster court case was a landmark case for Civil Rights, serving as a precedent for the famous Brown v. BoE case. In the case, the Mendez family had their children attending White schools previously without a problem (as Mexican Americans were considered White), but upon moving to Westminster were forced to attend segregated Mexican-only schools. This was because starting in the 1940s, some districts began segregating students by language, claiming that Mexican children had special needs because they spoke Spanish. The The family sued the Westminster School District, and won. "
    },
    
]
content.forEach((slide) => {
    //surprise refs that will help us later!
    const titleElement = document.getElementById(`title-${slide.id}`);
    const contentElement = document.getElementById(`content-${slide.id}`);
    const sectionElement = titleElement.closest('div'); 


   // set title and content
    titleElement.innerText = slide.title;
    contentElement.innerHTML = slide.contentHTML;

    //offset handler
    if (slide.align === 'l') {
        sectionElement.style.transform = 'translateX(-115%)';
    } else if (slide.align === 'r') {
        sectionElement.style.transform = 'translateX(15%)';
    } else {
     
    }
});
