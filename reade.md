# Portfolio_Back
Enoncé d'exercice :
# Projet Portfolio - Back-Office 

## Contexte 

Dans le cadre du développement de votre Portfolio, le besoin porte sur la conception et le développement d'un back-office permettant d'administrer la publication de projets, puis d'une interface publique permettant de consulter les projets publiés. 

  

## Durée 

4 semaines 

  

## Conception de la base de données 

La première étape d'un développement back-end est la conception de la base de données. Sans celle-ci, vous n'avez pas la possibilité de pouvoir avancer dans le développement convenablement. 

  

Créez une nouvelle base de données nommée `backoffice` 

Créez une nouvelle collection `projects` dans cette base de données. Structurez celle-ci : 

  

* projets : 

    * title 

    * description 

    * picture 

    * created_at (datetime) 

  

Pour chaque nouvelle entrée les champs sont alimentées par les informations transmises par le formulaire. 

  

Vous aurez également besoin d'un collection `users` afin de sécurisé l'administration du portfolio : 

  

* users : 

    * username 

    * password 

  

## Connexion à la base de données 

Créez une page dédiée à la seule connexion à la base de données. La page contient 4 variables, dont les valeurs seront à réadapter au moment du passage en production : 

  

``` 

HOST="localhost" 

DBNAME="backoffice" 

USER="root" 

PWD="" 

``` 

  

La page établit ensuite la connexion : 

  

```console.log(`connected on port ${PORT}`)``` 

  

## Ajouter des projets 

  

Dans un dossier situé à la racine de votre portfolio, créez un dossier nommé `back`. Dans ce même dossier, créez un fichier  contenant un formulaire avec les champs suivants : 

* titre 

* description 

* un champ permettant d'uploader une image : `<input type="file">` 

  

**La date ne doit pas figuré sur le formulaire !** 

  

Le formulaire enverra les données vers le serveur. Celui-ci vérifira si TOUTES les données ont bien été transmises. Si c'est le cas, vous effectuez un upload de l'image, correspondant au preview de votre projet, avant d'insérez les données en base de données. 

  

## Afficher les projets 

  

Maintenant que vous pouvez enregistrer vos projet en base de données. Il va falloir les afficher sur la page d'accueil de votre portfolio. 

  

Depuis la page de votre portfolio affichant vos projets, créez le code permettant de récupérer les données de la collection `projects` et afficher celles-ci, grâce à une boucle, à l'endroit où vous souhaitez les faire apparaître.  

  

### Afficher les projet - Partie 2 

  

En réutilisant le code écrit ci-dessus, créez un fichier dans le dossier `back` et afficher la totalité de vos projets dans un tableau HTML: 

  

| Preview | Titre | Date d'ajout | Actions | 

|---|---|---|---| 

| Image | Mon projet | 01/01/2021 | Editer / Supprimer | 

  

Les mots `Editer` et `Supprimer` sont des liens sur lesquels nous reviendrons un peu plus tard. 

  

Pensez à ajouter un bouton `Nouveau projet` sur votre page 

  

## Supprimer un projet 

  

Après avoir supprimer un projet, affichez un message de succès. 

  

## Editer un projet 

  

La page `editProject` doit contenir le même formulaire que l'ajout d'un projet. La différence étant que ce formulaire doit être pré-rempli des informations du projet à modifier. Grâce à l'ID reçu via l'URL, récupérez les infos en base de données et remplissez le formulaire avec.  

  

> Lors d'une modification, tous les champs doivent être remplis, comme pour l'ajout. Par contre, rien n'oblige la personne à modifier l'image qui est associée. 

> Donc si l'utilisateur sélectionne une nouvelle image, vous devez supprimer l'ancienne et mettre à jour l'ensemble des données avec la nouvelle, sinon, vous ne faites rien. 

  

## Création d'un utilisateur administrateur 

  

Le back-office doit être fermé au public et accessible seulement aux personnes possédant un `username` et `mot de passe`. Pour cela, il va falloir enregistrer le premier utilisateur qui n'est autre que vous. 

  

Créez une page `register` contenant un formulaire avec les champs : username et password. 

  

Ce formulaire enverra les données vers un fichier côté back-end responsable d'enregistrer les données en base. Dans ce fichier, faites en sorte d'insérer les données reçues dans la collection `users` et n'oubliez surtout pas d'effectuer un hash sur le mot de passe avec bcrypt. 

  

> Vérifier que le formulaire soit correctement rempli avant d'effectuer une insertion. 

  

> :warning: Afin d'éviter à des malins de trouver ce formulaire et de créer des comptes pour accéder à votre administration : **retirer ce fichier de votre projet par la suite.** 

  

## Sécuriser l'administration 

  

Pour terminer ce projet, vous devez maintenant sécuriser votre back-office.   

**Seul l'administrateur qui se connecte doit pouvoir y accéder et personne d'autre !** 

  

À la racine du dossier `back`, créez un fichier `index` contenant un formulaire avec les champs : username et password.   

Le formulaire redirige vers un fichier côté back-end. C'est lui qui est responsable de vérifier que le username et le mot de passe existe en base de données. 

  

Rediriger l'utilisateur vers la page `projects` si tout est correct, sinon affichez un message d'erreur et rester sur la page de connexion. Par sécurité, on ne précise jamais si c'est le `username` ou le `mot de passe` qui est invalide. 

  

Bonne chance !