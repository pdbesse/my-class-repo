import axios from "axios";

export default {
  getEmoji: () => {
    return axios.get("https://emoji-api.com/emojis?access_key=0087cfb6888bdeecf7cf3e24a52206d07bb770f3");
  }
}