import React from 'react';
import './Blog.css';




const Blog = () => {

    return (
        <div>
            <h3 className='p-1  '>Our Blog Post</h3>
            <h1 className='bg-warning p-3 ' >Our Most Popular Posts</h1>
            <h1>Our Client Says:</h1>
            <div className='bloging'>

                
                {/* bloging */}
                <div className='border border-warning m-3 '>
                  <h1>How Kids make sense of Life Experiences</h1>
                    <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>

                </div>
                <div  className='border border-warning m-3 '>
                <h2>Why do aerobicay fit children have better?</h2>
                <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>
                </div>
                <div  className='border border-warning m-3 '>
                  <h3>Why do aerobically have better Math Skills</h3>  
                <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>
                </div>
               

            </div>
            <div className='border borde-3 p-3 m-2'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Blog;