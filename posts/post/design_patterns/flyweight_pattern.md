## 1. 享元模式是什么

> 运用共享技术有效地支持大量细粒度的对象。



## 2. 如何去理解

> 运用共享技术减少创建对象的数量，以减少内存占用和提高性能。
>
> 它提供了减少对象数量从而改善应用所需的对象结构的方式，因此属于结构型模式。
>
> 假设有一个服装工厂，目前有50种男式服装和50种女士服装，为了推销商品，工厂决定生成一些塑料模特穿上服装拍成广告照片。
>
> 正常情况下需要50个男模特和50个女模特，然后让他们分别穿上服装来拍照。



## 3. 如何去使用

> 运用共享的思想，划分出内部状态和外部状态。
>
> 1> 内部状态：通常存储于对象内部、可以被共享、独立于具体场景，一般不会改变。
>
> 2> 外部状态：取决于具体场景，并根据场景而变化，外部状态不被共享。
>
> 根据内部状态的种类数目，生成相应的对象个数。
>
> 根据服装的性别款式，分为男士和女士服装，因此只需要生产一男一女模特，然后让他们分别穿上服装来拍照。



## 4. 举个栗子

> 沿用上面的工厂需要模特拍照的需求.
>
> 实现代码：
>
> ```javascript
> class Model {
>     constructor (sex, clothes) {
>         this.sex = sex
>         this.clothes = clothes
>     }
> 
>     takePhoto () {
>         console.log(`sex= ${this.sex} wear ${this.clothes}`)
>  }
> }
> 
> for(let i = 1; i <= 50; i++) {
>     new Model('male', 'clothes' + i).takePhoto()
> }
> for(let j = 1; j <= 50; j++) {
>     new Model('female', 'clothes' + j).takePhoto()
> }
> ```



享元模式改造：

由需求可知，服装分为男士和女士两种服装，此依据性别划分，且不随着场景变化而变化（换了模特也是要么男要么女），而服装会随着不同的服装而变化。

因此内部状态为性别 sex，外部状态为服装款式 clothes。

> ```javascript
> class Model {
>     constructor (sex, clothes) {
>         this.sex = sex
>     }
> 
>     takePhoto () {
>         console.log(`sex= ${this.sex} wear ${this.clothes}`)
>  }
> }
> 
> const maleModel = new Model('male'),
>       femaleModel = new Model('female')
> 
> for(let i = 1; i <= 50; i++) {
>     maleModel.clothes = 'clothes' + i
>     maleModel.takePhoto()
> }
> for(let i = 1; i <= 50; i++) {
>     femaleModel.clothes = 'clothes' + j
>     femaleModel.takePhoto()
> }
> ```



## 5. 开发实践

> 文件上传需求：
>
> ```html
> <section>
>  <div>
>         <input id="file" type="file" />
>         <el-button @click="fileUpload('flash')">flash插件上传</el-button>
>  </div>
>  <div>
>         <input id="file2" type="file" />
>         <el-button @click="fileUpload('plugin')">插件上传</el-button>
>  </div>
> </section>
> ```
>
> ```javascript
> fileUpload (uploadType) {
>     let fileList = document.getElementById('file').files
>     fileList = [...fileList]
>     if (fileList.length) {
>         let params = {}
>         fileList.forEach(file => {
>             startUpload(uploadType, fileList);
>         })
>         this.$api.post('http://testdata.duoyioa.com/file_upload', { params })
>     } else {
>         console.log('请选择文件')
>     }
> }
> 
> created () {
>     window.startUpload = function (uploadType, files) {
>         let id = 0
>         for(let i = 0, file, file = files[i++];) {
>             const uploadObj = new Upload(uploadType, file, file.fileName, file.fileSize)
>             uploadObj.init(id++) // 唯一性 id
>     	}
> 	}
> }
> ```
>
>
>
> 享元模式重构：
>
> 由需求可知，文件上传的方式有两种，且不随着文件的不同而变化，文件名、文件大小在不同文件是不同的。
>
> 因此内部状态为文件上传方式 uploadType，外部状态为 fileName、fileSize。
>
> ```javascript
> class Upload {
>     constructor (uploadType) {
>         this.uploadType = uploadType
>     }
> }
> ```
>
> 定义工厂来创建 upload对象
>
> ```javascript
> const UploadFactory = (function () {
>  const createdFlyWeightObj = {}
>     return {
>         create (uploadType) {
>          return createdFlyWeightObj[uploadType]
>                 ? createdFlyWeightObj[uploadType]
>             : createdFlyWeightObj[uploadType] = new Upload(uploadType)
>         }
>     }
> })()
> ```
>
> 定义管理器封装外部状态
>
> ```javascript
> const uploadManager = (function () {
>  const uploadDatabase = {}
>     return {
>         add (id, uploadType, fileName, fileSize) {
>             uploadDatabase[id] = {
>                 fileName,
>              fileSize
>             }
>             return UploadFactory.craete(uploadType)
>         },
>         setExternalState (id, flyWeightObj) {
>             const uploadData = uploadDatabase[id]
>             for(let i in uploadData) {
>                 flyWeightObj[i] = uploadData[i]
>             }
>         }
>     }
> })()
> ```
>
> 开始触发上传
>
> ```javascript
> let id = 0
> window.startUpload = function (uploadType, files) {
>     for(let i = 0, file; file = files[i++];) {
>         const uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
>         uploadManager.setExternalState(id, uploadObj)
>     }
> }
> ```



## 6. 评价

> 享元模式是一种很好的性能优化方案，可以解决存在大量对象导致内存占用高的问题，
>
> 但显而易见，给模块带来了复杂度，需要多维护一个工厂对象和管理器。



## 7. 拓展

> 并不是运用了共享的思想就是使用了享元模式。
>
> 比如对象池技术，也运用了共享的思想，但它没有分离内部状态和外部状态。