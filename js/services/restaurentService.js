angular.module('restaurent')
    .service('restaurentService', function () {
        this.myRestaurents = [{
                name: "Clay Oven",
                img: "https://www.clayovenindianrestaurant.ca/wp-content/uploads/2017/12/Clay-Oven-Restaurant-5-1800x900_c.jpg",
                rating: 3,
                description: "Founded in 2005 by the Ahluwalia Family, Clay Oven offers a vast menu of chicken, lamb, goat, seafood, vegetarian and vegan dishes, as well as a selection of sweets and desserts all prepared from authentic Indian recipes. ",
                text: ""
            },
            {
                name: "Indian Cuisine",
                img: "https://lh4.googleusercontent.com/-NBtA059K26c/V0pdSRBNEEI/AAAAAAAAAVA/Z_kFsUn2UB4CM6q6VZyE_E25b9_6lK9YwCJkC/s1600-w1000/",
                rating: 3,
                description: "Jas Indian Cuisine offers all that you would want in a traditional Indian meal. They take pride in offering their customers the best Tandoori, Biryani, and Naan dishes, with a wide variety of breakfasts and appetizers as well.",
                text: ""

            },
            {
                name: "Tim Hortons",
                img: "https://i.cbc.ca/1.4474349.1515181402!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/tim-hortons-cuts-wages-over-min-wage-hike-4.jpg",
                rating: 3,
                description: "Tim Hortons Inc. is a Canadian-based multinational fast food restaurant known for its coffee and donuts. It is also Canada's largest quick service restaurant chain; as of December 31, 2016, it had a total of 4,613 restaurants in nine countries.",
                text: ""
            },
            {
                name: "Macdonald's",
                img: "https://boygeniusreport.files.wordpress.com/2017/02/mcdonalds.jpg?quality=98&strip=all&w=782",
                rating: 3,
                description: "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States. They rechristened their business as a hamburger stand.",
                text: ""
            }
        ]
        this.increaseRating = function (index) {
            if (this.myRestaurents[index].rating < 5) {
                this.myRestaurents[index].rating++;
            }
        }
        this.decreaseRating = function (index) {
            if (this.myRestaurents[index].rating > 1) {
                this.myRestaurents[index].rating--;
            }
        }
    })