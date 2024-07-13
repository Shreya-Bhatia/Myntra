import './productinput.css'
import {app,db} from '../../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v1 } from "uuid";

const storage = getStorage();

function ProductInput() {
	const [file, setFile] = useState();
	const [isLoading,setLoad] = useState(false);

	function handleChange(event) {
		setFile(event.target.files[0])
	}
	
	async function submitProduct(e) {
		setLoad(true);

		e.preventDefault();

		const form = e.target;
		const formData = new FormData(form);

		if(file==null) return;
		const imgref = ref(storage, 'pimages/' + v1());
		await uploadBytes(imgref,file);
		

		const prod = Object.fromEntries(formData.entries());
		const fprod = JSON.parse(JSON.stringify(prod));

		await getDownloadURL(imgref).then((url) => {
			fprod.image = url;
		});

		const prodRef = doc(db,"products",v1());
		await setDoc(prodRef, fprod);

		setLoad(false);
	}

	return (
		<div>
			{
				isLoading
				? <h3>Uploading the data ...</h3>
				: <form className="productinput" onSubmit={submitProduct}>
					Name of product <input type="text" name="name" />
					Price <input type="number" name="price" />
					Style <input type="text" name="style" />
					Gender <select name="gender">
								<option value="Male">Male</option>
								<option value="Female">Female</option>
							</select>
					Image <input type="file" name='image' onChange={handleChange}/>
					Description <input type="text" name='desc' />
					Rating <input type="number" name="rating" step={'0.1'}/>
					People Brought <input type="number" name="peopleb" step={'0.1'} />
					<input type="submit" className='psubmit'/>
				</form>
			}
		</div>
	);
}

export default ProductInput;