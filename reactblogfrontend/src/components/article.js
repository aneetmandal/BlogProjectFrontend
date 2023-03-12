import '../styles/article.css';


function Article(){
    return(
        <>
        <div className='Article-Page'>
        <div className='Header-Section'>
            <div className='Heading-1'>The</div>
            <div className='Heading-2'>Siren</div>
            <button className='Heading-3'>
                <div className='Btn-Text'>Get Started</div>
            </button>
        </div>
        <div className='Body-Section'>
            <div className='Body-Header'>5 Ways to animate a React app</div>
            <div className='Author-Pic'></div>
            <div className='Author-Name'>Dmitry Nozhenko</div>
            <div className='Author-Timestamp'>March 12, 2023 · 10 min read</div>
            <div className='Social-Media'></div>

            <div className='Img-1'></div>
            <div className='Body-Text'>Animation in ReactJs app is a popular topic and there are many ways to create 
            different types of animations.Many developers create animation exclusively using css and adding classes to 
            HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay 
            attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries,
             components for creating animation in React.<br /><br />Let’s talk about them</div>

             <div className='Img-2'></div>
        </div>

        <div className='Footer-Section'>


        </div>

        </div>
        </>
    );
}

export default Article;