import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import Header_Accessory from '../Accessories/Header-Accessory';
function Upload() {
    const [file, setFile] = useState(null);
    const [isLoading, setLoad] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const storage = getStorage();
    const auth = getAuth();

    function handleChange(event) {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        if (selectedFile) {
            reader.readAsDataURL(selectedFile);
        } else {
            setPreviewUrl("");
        }
    }

    async function submitOOTD(e) {
        e.preventDefault();

        const uid = auth.currentUser.uid;

        if (file == null) {
            return;
        }

        setLoad(true);

        const imgref = ref(storage, 'ootd_images/' + uid);
        await uploadBytes(imgref, file);

        const uootd = {
            img: "",
            users_liked: [],
            no_of_likes: 0,
            id: uid
        };

        await getDownloadURL(imgref).then((url) => {
            uootd.img = url;
        });

        const OOTDRef = doc(db, "OOTD", uid);
        await setDoc(OOTDRef, uootd);

        setLoad(false);

        alert('OOTD uploaded successfully...');
    }

    return (
        <div className="container">
        <Header_Accessory></Header_Accessory>
        <div className="main">
            {isLoading
                ? <h3>Loading....</h3>
                : <form onSubmit={submitOOTD}>
                    <input type="file" accept="image/*" onChange={handleChange} />
                    <input type="submit" />
                  </form>
            }
            {previewUrl && 
                <div>
                    <h3>Preview Your #OOTD:</h3>
                    <img src={previewUrl} alt="Uploaded OOTD" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
            }
        </div></div>
    );
}

export default Upload;
