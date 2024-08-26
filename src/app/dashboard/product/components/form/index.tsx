"use client"

import { Button } from "@/app/dashboard/components/button";
import styles from './styles.module.scss';
import { UploadCloud } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface CategoryProps {
    id: string;
    name: string;
}

interface FormProps {
    categories: CategoryProps[];
}

export function Form({ categories }: FormProps) {

    const router = useRouter();
    const [image, setImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState("");

    async function handleRegisterProduct(formData: FormData) {
        const categoryIndex = formData.get("category");
        const name = formData.get("name");
        const price = formData.get("price");
        const description = formData.get("description");

        if(!categoryIndex || !name || !price || !description || !image) {

            toast.warning("Preencha todos os campos para cadastrar um produto");

            return;
        }

        const data = new FormData();

        data.append("name", name)
        data.append("price", price)
        data.append("description", description)
        data.append("category_id", categories[Number(categoryIndex)].id)
        data.append("file", image)

        const token = getCookieClient();

        await api.post("/product", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        .catch((err)=> {
            console.log(err);
            toast.error("Erro ao cadastrar produto");
            return;
        })

        toast.success("Produto cadastrado com sucesso");
        router.push("/dashboard");

    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if( e.target.files && e.target.files [0]) {
            const image = e.target.files[0];

            if(image.type !== "image/jpeg" && image.type !== "image/png") {
                toast.warning("A imagem deve ser do tipo PNG ou JPEG");

                return;
            }

            setImage(image);
            setPreviewImage(URL.createObjectURL(image));
        }
        
        
    }

  return (
    <main className={styles.formContainer}>
        <h1>Novo Produto</h1>
        <form className={styles.form} action={handleRegisterProduct}>
            <label className={styles.labelImg}>
                <span>
                    <UploadCloud size={30} color="#c66300" />
                </span>
                <input
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg"
                    required
                    onChange={handleFile}
                />
                {previewImage && (
                    <Image
                        src={previewImage}
                        alt="Imagem do produto"
                        className={styles.previewImage}
                        fill={true}
                        quality={100}
                        priority={true}
                    />
                )}
            </label>

            <select name="category">
                {categories.map((category, index)=> (
                    <option key={category.id} value={index}>
                        {category.name}
                    </option>
                ))}
            </select>

            <input
                type="text"
                name="name"
                placeholder="Nome do Produto"
                required
                className={styles.input}
            />
            <input
                type="text"
                name="price"
                placeholder="Preço do Produto"
                required
                className={styles.input}
            />

            <textarea
                name="description"
                placeholder="Descrição do Produto"
                required
                className={styles.input}
            />
          
          <Button name="Cadastrar" />
        </form>
    </main>
  );
}