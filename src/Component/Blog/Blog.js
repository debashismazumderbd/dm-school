import React from 'react';
import './Blog.css';




const Blog = () => {

    return (
        <div>
            <h3 className='p-1 '>Our Blog Post</h3>
            <h1 className='p-3 bg-warning ' >Our Most Popular Posts</h1>
            <div className='bloging'>

                
                {/* bloging */}
                <div className='m-3 border border-warning '>
                  <h1>How Kids make sense of Life Experiences</h1>
                    <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>

                </div>
                <div  className='m-3 border border-warning '>
                <h2>Why do aerobicay fit children have better?</h2>
                <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>
                </div>
                <div  className='m-3 border border-warning '>
                  <h3>Why do aerobically have better Math Skills</h3>  
                <p>Enthusiastically morph magnetic scenarios Uniquelly synthesize strategic theme areas vis parallel customer service.</p>
                </div>
               

            </div>
            <div className='p-3 m-2 border borde-3'>
                <input type="text" placeholder='subscribe' />
                <button className='btn btn-warning'>Subscribe</button>
            </div>
        </div>
    );
};

export default Blog;