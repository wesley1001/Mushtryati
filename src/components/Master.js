'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {connect} from 'react-redux/native';
import { normalize, Schema, arrayOf } from 'normalizr';

import {Record} from 'immutable';

export default class Master extends Component {

  render() {

    const media = new Schema('medias');
    const user = new Schema('users');
    const comment = new Schema('comments');
    const thumbnail = new Schema('thumbnail');

    //const article = new Schema('articles');
    //const user = new Schema('users');
    //const collection = new Schema('collections');


    media.define({
      user:user,
      comments:arrayOf(comment)
    });

    comment.define({
      user:user
    });

    user.define({
      thumbnail:thumbnail
    });



    var medias =  [
      {
        "id": 1,
        "user_id": 1,
        "caption": "Corporis asperiores consequatur animi id ea et fuga ex aliquid sed est quos sed ea dolore neque voluptatum eos qui placeat natus vel et quam eum itaque vel cum inventore pariatur aut aspernatur consequuntur asperiores quia eos aliquam iusto ducimus occaecati laboriosam autem adipisci in magnam aut nihil quod aperiam et molestiae consequuntur nesciunt qui dolore est voluptates.",
        "type": "image",
        "url": "http://mushtryati.app/images/test.jpg",
        "created_at": "2015-12-29 18:32:00",
        "updated_at": "2015-12-29 18:32:00",
        "user": {
          "id": 1,
          "name": "Malvina Schmeler",
          "email": "Nicholas.Monahan@Dooley.com",
          "mobile": "+96597978803",
          "active": 1,
          "activation_code": null,
          "admin": 0,
          "created_at": "2015-12-29 18:31:58",
          "updated_at": "2015-12-29 18:31:58",
          "thumbnail": {
            "id": 1,
            "name": "http://mushtryati.app/images/test.png",
            "imageable_id": 1
          }
        },
        "comments": [
          {
            "id": 5,
            "user_id": 9,
            "media_id": 1,
            "comment": "Qui voluptatem et repudiandae ea.",
            "created_at": "2015-12-29 18:32:06",
            "updated_at": "2015-12-29 18:32:06",
            "user": {
              "id": 9,
              "name": "Oleta Carroll PhD",
              "email": "Eileen.Bernier@yahoo.com",
              "mobile": "+96597978803",
              "active": 1,
              "activation_code": null,
              "admin": 0,
              "created_at": "2015-12-29 18:31:58",
              "updated_at": "2015-12-29 18:31:58",
              "thumbnail": {
                "id": 9,
                "name": "http://mushtryati.app/images/test.png",
                "imageable_id": 9
              }
            }
          }]
      }];

    var a = normalize(medias,arrayOf(media));


    //article.define({
    //  author: user,
    //  collections: arrayOf(collection)
    //});
    //
    //var articles = [{
    //  id: 1,
    //  title: 'Some Article',
    //  author: {
    //    id: 1,
    //    name: 'Dan'
    //  },
    //  collections: [{id:1,name:'bla'},{id:2,name:'asdsd'}]
    //}, {
    //  id: 2,
    //  title: 'Other Article',
    //  author: {
    //    id: 1,
    //    name: 'Dan'
    //  }
    //}];

    //var a = normalize(articles,  arrayOf(article));
    //var b = normalize(articles, {
    //  articles: arrayOf(article)
    //});

    console.log('first ', a);
    //console.log('second ', b.entities);

    return (
      <View style={[styles.container]}>
        <Text style={styles.text}>Push detail view</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 100,
  },
  text: {
    color: '#000000',
  },
});
