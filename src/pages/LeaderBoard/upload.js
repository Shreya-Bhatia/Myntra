import React, { useState } from 'react';
import { db } from '../../firebase';
import { doc, increment, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import HeaderAccessory from '../Accessories/Header-Accessory';
import './upload.css';

function Upload() {
    const [file, setFile] = useState(null);
    const [isLoading, setLoad] = useState(false);
    const [previewUrl, setPreviewUrl] = useState("");
    const [uploadedUrl, setUploadedUrl] = useState("");
    const storage = getStorage();
    const auth = getAuth();
    const placeholderUrl = "https://img.freepik.com/free-vector/illustration-fashion-young-koreans_23-2148621556.jpg?t=st=1720890727~exp=1720894327~hmac=7c69918bd19d9a9a980c60c2a027994089c8eb30392642ba9b7d58e840b93c7a&w=1060";

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
            setUploadedUrl(url);
        });

        const OOTDRef = doc(db, "OOTD", uid);
        await setDoc(OOTDRef, uootd);

        const userRef = doc(db, "users", uid);
        await updateDoc(userRef, {
            streak_count: increment(1)
        });

        setLoad(false);

        alert('OOTD uploaded successfully...');
    }
    

    return (
        <div className="container">
            <HeaderAccessory />
            <div className="main">
                <form onSubmit={submitOOTD}>
                    {(previewUrl || uploadedUrl) && (
                        <div>
                            {previewUrl && !uploadedUrl && (
                                <div>
                                    <h3 className='title-is'>Preview Your #OOTD:</h3>
                                    <img src={previewUrl} alt="Preview OOTD" style={{ maxWidth: '100%', height: 'auto' }} />
                                </div>
                            )}
                            {uploadedUrl && (
                                <div>
                                    <h3 className='title-is'>Uploaded Image:</h3>
                                    <img src={uploadedUrl} alt="Uploaded OOTD" style={{ maxWidth: '100%' }} className='Image'/>
                                </div>
                            )}
                        </div>
                    )}
                    {!previewUrl && !uploadedUrl && (
                        <div>
                            <h3 className='title-is'>Preview Your #OOTD:</h3>
                            <img src={placeholderUrl} alt="Placeholder OOTD" style={{ maxWidth: '100%', height: 'auto' }} />
                        </div>
                    )}
                    {!uploadedUrl && (
                        <div>
                            <input type="file" accept="image/*" onChange={handleChange} className='choose' />
                        </div>
                    )}
                    {isLoading ? <h3>Loading....</h3> : !uploadedUrl && <input type="submit" value="Submit Your #OOTD" className='Submit' />}
                </form>
            </div>
        </div>
    );
}

export default Upload;
