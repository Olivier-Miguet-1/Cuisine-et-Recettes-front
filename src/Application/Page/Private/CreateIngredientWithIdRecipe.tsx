import {useState} from "react";
import {Box, Flex, Input, Textarea, Title} from "@mantine/core";
import {ButtonPrimary} from "../../Component/ButtonPrimary.tsx";

export type IngredientType = {
    id: number,
    name: string,
    description: string,
    quantity: string
}

export type UstensilType = {
    id: number,
    name: string,
    description: string,
    quantity: string
}

export const CreateRecipePage = () => {
    const [idIngredient, setIdIngredient] = useState(0)
    
    // ici variable useState pour la recette
    const [titleRecipe, setTitleRecipe] = useState("")
    const [descriptionRecette, setDescriptionRecette] = useState("")
    
    // ici variable useState pour les ingredients
    const [nameIngredient, setNameIngredient] = useState("")
    const [descriptionIngredient, setDescriptionIngredient] = useState("")
    const [quantityIngredient, setQuantityIngredient] = useState("")

    // ici variable useState pour la liste des ingredients
    const [listIngredient, setListIngredient] = useState<IngredientType[]>([])
    
    const addIngredient = () => {
        const ingredient: IngredientType = {
            id: idIngredient,
            name: nameIngredient,
            description: descriptionIngredient,
            quantity: quantityIngredient
        }
        
        console.log("Ingredient => ", ingredient)
        
        setListIngredient((oldValue) => {
            return [...oldValue, ingredient]
        })
        
        setIdIngredient((oldValue) => oldValue + 1)
        setNameIngredient("")
        setDescriptionIngredient("")
        setQuantityIngredient("")
    }
    
    const deleteIngredient = (id: number) => {
        const newArrayOfIngredient = listIngredient.filter((ingredient) => ingredient.id !== id)
        setListIngredient([...newArrayOfIngredient])
    }
    
    return (
        <>
            <div>
                <Input placeholder="Ajouter un titre" value={titleRecipe} onChange={
                    (event) => {
                        setTitleRecipe(event.currentTarget.value)
                    }
                }/>
                <Textarea
                    placeholder="Ajouter une description"
                    value={descriptionRecette}
                    onChange={
                        (event) => {
                            setDescriptionRecette(event.currentTarget.value)
                        }
                    }
                />
                
                <Flex w={500} justify={"center"} direction={"column"} align={"center"}>
                    <Title mt={40} mb={20} order={3}>Ajouter des ingredients</Title>
                    
                    <Input placeholder="Ajouter un nom" value={nameIngredient} onChange={
                        (event) => {
                            setNameIngredient(event.currentTarget.value)
                        }
                    }/>
                    <Input placeholder="Ajouter une description" value={descriptionIngredient} onChange={
                        (event) => {
                            setDescriptionIngredient(event.currentTarget.value)
                        }
                    }/>
                    <Input placeholder="Ajouter une quentité" value={quantityIngredient} onChange={
                        (event) => {
                            setQuantityIngredient(event.currentTarget.value)
                        }
                    }/>
                    
                    <Box mt={20}>
                        <ButtonPrimary onClickButton={addIngredient} >Ajouter ingredient</ButtonPrimary>
                    </Box>
                </Flex>
                
                <Flex>
                    {
                        listIngredient.length > 0 &&
                        listIngredient.map((ingredient, index) => {
                            return (
                                <div style={{backgroundColor: "#E5E5E5", marginTop:"20px", marginLeft: "20px"}} key={index}>
                                    <p>id: {ingredient.id}</p>
                                    <p>name: {ingredient.name}</p>
                                    <p>description: {ingredient.description}</p>
                                    <p>quantité: {ingredient.quantity}</p>
                                    <button onClick={() => deleteIngredient(ingredient.id)} >supprimer</button>
                                </div>
                            )
                        })
                    }
                </Flex>
                
                <Box mt={20} mb={40}>
                    <ButtonPrimary >Creer la recette</ButtonPrimary>
                </Box>
            </div>
        </>
    )
}
