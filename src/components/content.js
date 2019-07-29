import React, {Component} from 'react';
import topImage from '../images/top-image-content.jpg';
import logoContent from '../images/logo-content.jpg';

class Content extends Component{
    render(){
        return(
            <div className='content'>
                <div>
                    <img src={topImage} alt="image"/>
                </div>
                <div className='logo-post'>
                    <img src={logoContent} alt="image"/>

                </div>
                <div>
                    <p>My post</p>
                    <div>
                        new post
                    </div>
                </div>
                <div className="listPost">
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>

            </div>
        )
    }
}

export default Content;