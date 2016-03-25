## How to!
### 1. watch (development)
  gulp develop
  > target = src 폴더
  
  gulp develop --product hello
  > target = _project/hello 폴더
  
### 2. build
  gulp build
  > target = src 폴더
  
  gulp develop --product hello
  > target = _project/hello 폴더

### 3. uglify
  gulp uglify-js
  > target = build/assets/js 폴더

----

target 이 되는 폴더를 .tmp 에 복사 후 Sass Compile, usemin 처리 후 Build 진행

## Setup!
1. npm install
2. bower install
