1. add new one on fb console
2. add rules  
   example for auth only users:

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

3. import firestore and create db instance `const db = firestore()`
4. add named doc `const newDoc = await db.collection('collection').doc('doc').set(objectName)`  
   or unnamed one `const newUser = await db.collection(USERS).add(user)`

5. get data  
   collection:

```
	const users = await db.collection(USERS).get()
	users.forEach((doc) => {
		console.log('getUser -> doc', doc.id, doc.data())
	})
```

document: `db.collection("cities").doc("docId");`

6. add storage in console
7. add YOUR_APP.appspot.com (from file page of console) to your config file. With prop name: storageBucket
8. import storage from fb and init instance. `storage = firebase.storage();`
9. add image file example:

```
export const addImage = async (imageName, image) => {
	const newImgRef = storageRef.child(`${IMAGES}/${imageName}.jpg`)
	await newImgRef.put(image)
}
```

10. get image

```
export const getImage = async (imageName) => {
	const storageRef = storage.ref(IMAGES)
	const url = await storageRef.child(`${imageName}.jpg`).getDownloadURL()

	const image = await fetch(url)
	const blobImage = await image.blob()

	return blobImage
}
```

11. CORS problems - https://firebase.google.com/docs/storage/web/download-files?authuser=0#cors_configuration

### Docs

1. storage - https://firebase.google.com/docs/storage/web/start?authuser=0
2. db - https://firebase.google.com/docs/firestore?authuser=0
