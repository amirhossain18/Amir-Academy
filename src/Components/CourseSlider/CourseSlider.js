import React from 'react';
import "swiffy-slider/css"
import './CourseSlider.css'
import { swiffyslider } from 'swiffy-slider'


import { AiFillStar , AiOutlineUsergroupAdd } from "react-icons/ai";

window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});
const CourseSlider = () => {
    return (
     <div className='container mt-5'>
        <h1 className='heading-2 text-center '>Our popular courses</h1>
        <h4 className='paragraph-normal text-center mb-3'>Non-disclosure agreement seed round seed <br/> money accelerator influencer.</h4>
      <div class="swiffy-slider slider-item-show3 slider-nav-round slider-nav-page">
    <ul class="slider-container">
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624ff87cfb05b90f2fa0b44a_unsplash_IyaNci0CyRk.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/627dc13497d4760e97dc7500_image1.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/627dc1340094e320da9f7398_image2.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1146411/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
        <li>
            <div class="card border-1">
                <div class="ratio ratio-1x1">
                    <img src="https://www.freecodecamp.org/news/content/images/2021/10/node4.png" class="card-img-top" loading="lazy" alt="..."/>
                </div>
                <div class="card-body p-0 pt-2 m-3">
                    <div class="d-flex">
                        <h3 class="flex-grow-1 h5">Graphic design course</h3>
                       
                    </div>
                    <div className='text-warning d-flex justify-content-between'>
                       <div> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                       </div> 
                       <p class="px-2">$120</p>
                    </div>
                  <AiOutlineUsergroupAdd/> <p>2.5k + Students</p>

                </div>
            </div>
        </li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go left"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>
</div>
     </div>
    );
};

export default CourseSlider;