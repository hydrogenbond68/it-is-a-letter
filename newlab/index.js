function isKifee(dog){
  switch(dog.toUpperCase()) {
    case "kifee":
        return 'Hi kifee you are brave!';
        default:
            if(typeof dog ==='string') {
                return `Hi ${dog}!`
        }else {
            return "Hi, you are not a brave dog";
        }

            }
        }
  console.log(isKifee("kifee"))