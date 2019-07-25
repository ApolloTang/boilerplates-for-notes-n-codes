#!/usr/bin/env bash



yarn add -D \
    @babel/cli \
    @babel/core \
    #
    @babel/plugin-proposal-class-properties \
    #
    @babel/preset-env \
    @babel/preset-react \
    @babel/preset-typescript \
    #
    @types/node \
    @types/react \
    @types/react-dom \
    #
    babel-eslint \
    babel-loader \
    #
    eslint \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    #
    html-webpack-plugin \
    #
    webpack \
    webpack-cli \
    webpack-dev-server


# yarn add -D \
#     style-loader \
#     css-loader \


yarn add \
    @babel/polyfill \
    core-js@3 \
    react \
    react-dom


#emotion with babel-plugin-emotion
  yarn add \
      @emotion/core \
      @emotion/styled \
      babel-plugin-emotion \

  yarn remove -D \
      @emotion/babel-preset-css-prop


#emotion with @emotion/babel-preset-css-prop
  yarn add \
      @emotion/core \
      @emotion/styled \

  yarn add -D \
      @emotion/babel-preset-css-prop

  yarn remove \
      babel-plugin-emotion \

