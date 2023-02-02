
const post = [
    {
        avatar: "./images/users/john.jpeg",
        menuIcon: "./images/icons/menu.svg",
        likeIcon: "./images/icons/heart.svg",
        smileIcon: "./images/icons/smile.svg",
        userName: "John Doe",
        localization: "Szczecin, Polska",
        img: "./images/photos/gielda.jpeg",
        likes: "Liczba polubień: 2",
        articleContent: "Lorem ipsum dolor sit amet consectetur adipisicing eli Voluptatem sint veritatis omnis, quos magni ducimus enimofficia praesentium itaque soluta ipsam delectus,voluptate quod culpa, temporibus a minus dictanecessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing eli Voluptatem sint veritatis omnis, quos magni ducimus enimofficia praesentium itaque soluta ipsam delectus,voluptate quod culpa, temporibus a minus dictanecessitatibus!"
    },
    {
        avatar: "./images/users/lisa.jpeg",
        menuIcon: "./images/icons/menu.svg",
        likeIcon: "./images/icons/heart.svg",
        smileIcon: "./images/icons/smile.svg",
        userName: "Lisa Noname",
        localization: "Kraków, Polska",
        img: "./images/photos/stoisko.jpeg",
        likes: "Liczba polubień: 12",
        articleContent: "Lorem ipsum dolor sit amet consectetur adipisicing eli Voluptatem sint veritatis omnis, quos magni ducimus enimofficia praesentium itaque soluta ipsam delectus,voluptate quod culpa, temporibus a minus dictanecessitatibus!"
    },
    {
        avatar: "./images/users/amanda.jpeg",
        menuIcon: "./images/icons/menu.svg",
        likeIcon: "./images/icons/heart.svg",
        smileIcon: "./images/icons/smile.svg",
        userName: "Cristiano",
        localization: "Garchen Kirchen, Niemcy",
        img: "./images/photos/presentation.jpeg",
        likes: "Liczba polubień: 222",
        articleContent: "Lorem ipsum dolor sit amet consectetur adipisicing eli Voluptatem sint veritatis omnis, quos magni ducimus enimofficia praesentium itaque, garnki krystyny, soluta ipsam delectus, voluptate quod culpa, temporibus a minus dictanecessitatibus!"
    }
];

post.map(function(elOfPost, index) {
    const container = document.querySelector (".content-wrapper__main");
    const articleContainer = document.createElement("div");
    container.appendChild(articleContainer);
    articleContainer.classList.add("container");
    
    const article = document.createElement("article");
    article.setAttribute("class", "post");
    
    const articleHeader = document.createElement("div");
    articleHeader.setAttribute("class", "post__header");
    const articleContent = document.createElement("div");
    articleContent.setAttribute("class", "post__content");

    const articleImage = document.createElement("a");
    articleImage.setAttribute("href", "#");

    const userDetails = document.createElement("div");
    userDetails.setAttribute("class", "user-details");

    const userDetailsImg = document.createElement("div");
    userDetailsImg.setAttribute("class", "user-details__img");

    const userDetailsContent = document.createElement("div");
    userDetailsContent.setAttribute("class", "user-details__content");

    const imageSquare = document.createElement("div");
    imageSquare.setAttribute("class", "image-square");

    const postImg = document.createElement("div");
    postImg.setAttribute("class", "post__img");

    const postImage = document.createElement("img");
    postImage.setAttribute("src", post[index].img);

    const postDetails = document.createElement("div");
    postDetails.setAttribute("class", "post__details");

    const postActions = document.createElement("div");
    postActions.setAttribute("class", "post__actions");

    const postComments = document.createElement("div");
    postComments.setAttribute("class", "post__comments");

    const pLikes = document.createElement("p");
    const pComments = document.createElement("p");
    pComments.setAttribute("class", "post__comments-comment");

    const postActionsItem = document.createElement("a");
    postActionsItem.setAttribute("href", "#");
    postActionsItem.setAttribute("class", "post__actions-item");

    const postFooter = document.createElement("div");
    postFooter.setAttribute("class", "post__footer");

    const footerIcon = document.createElement("img");
    footerIcon.setAttribute("src", post[index].smileIcon);
    
    const h3 = document.createElement("h3");
    const userLocalization = document.createElement("p");
    
    const p = document.createElement("p");
    const menuIcon = document.createElement("img");
    const avatar = document.createElement("img");
    const likeIcon = document.createElement("img");

    avatar.setAttribute("src", post[index].avatar);
    likeIcon.setAttribute("src", post[index].likeIcon);
    
    articleContainer.appendChild(article);

    article.appendChild(articleHeader);
    article.appendChild(articleContent);

    articleHeader.appendChild(userDetails);
    articleHeader.appendChild(articleImage);

    userDetails.appendChild(userDetailsImg);
    userDetails.appendChild(userDetailsContent);

    userDetailsContent.appendChild(h3);
    userDetailsContent.appendChild(userLocalization);
    h3.innerText = post[index].userName;
    userLocalization.innerText = post[index].localization;

    articleContent.appendChild(postImg);
    articleContent.appendChild(postDetails);
    articleContent.appendChild(postFooter);

    postDetails.appendChild(postActions);
    postDetails.appendChild(postComments);

    postActions.appendChild(postActionsItem);

    postActionsItem.appendChild(likeIcon);

    postImg.appendChild(postImage);

    postComments.appendChild(pLikes);
    pLikes.innerText = post[index].likes;
    postComments.appendChild(pComments);
    pComments.innerText = post[index].articleContent;

    postFooter.appendChild(footerIcon);

    articleImage.appendChild(menuIcon);
    userDetailsImg.appendChild(imageSquare);
    imageSquare.appendChild(avatar);
    articleContent.appendChild(p);
 
});


