import React, { Component } from 'react';
import './Article.css';
import _ from 'lodash';
import Toolbar from './ToolBar'

export default class ArticleContent extends Component {
  render() {
    const data = this.props.data;
    const items = data.tag;
    const tagList = _.map(items, item => {
      return (
        <li className="nav-item" key={item}>
          <a className="nav-link" href="">{item}</a>
        </li>
      );
    });
    console.log(tagList);
    return (
      <div className="article-content">
        <h1 className="article-content-title">{data.title}</h1>
        <nav id="content" className="navbar navbar-light bg-light">
          <ul className="nav nav-pills">
            {tagList}
          </ul>
        </nav>
        <div data-spy="scroll" data-target="#content" data-offset="0">
          <img className="card-img-top" src={data.thumbnail} alt=" Loading Error" />
          <div>
            <h4 id="fat">@fat</h4>
            <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. 
              Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. 
              Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, 
              williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. 
              Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
            <h4 id="mdo">@mdo</h4>
            <p>
              Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. 
              Freegan beard aliqua cupidatat mcsweeney's vero. Cupidatat four loko nisi, ea helvetica nulla carles. 
              Tattooed cosby sweater food truck, mcsweeney's quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. 
              Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.
            </p>
            <h4 id="one">one</h4>
            <p>
            Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, 
            velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, 
            echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. 
            Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.
            </p>
            <h4 id="two">two</h4>
            <p>In incididunt echo park, officia deserunt mcsweeney's proident master cleanse thundercats sapiente veniam. 
              Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. 
              Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. 
              Assumenda you probably haven't heard of them art party fanny pack, tattooed nulla cardigan tempor ad. 
              Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, 
              lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.</p>
            <h4 id="three">three</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. 
              Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. 
              Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, 
              williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa 
              biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.
            </p>
            <Toolbar className="toolbarbox"/>
          </div>
        </div>
      </div>
    );
  }
}


