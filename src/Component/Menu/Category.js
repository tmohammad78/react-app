import React ,{Component } from 'react';

import "../../sass/components/category.scss"
class Category extends Component {

    render(){
        return (
        //     <div className="categories__indexbox " data-cat-id="<%=id%>" >
        //     <a class="categories__indexbox--inner scroll" href="#dfgdfgdfg">
        //         <% if(logo){ %>
        //           <img className="categories__img " src="img/<%=logo%>" alt="<%=title%>">
        //         <%}%>
        //         <b className="categories__caption"><%=title%></b>
        //     </a>
        // </div>
            <div className="categories__indexbox" data-cat-id="">
                <a className="categories__indexbox--inner scroll">
                    <img className="categories__img " />
                    <b className="categories__caption"></b>
                </a>
            </div>
        )
    }
}

export default Category;