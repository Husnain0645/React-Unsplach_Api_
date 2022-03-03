import axios from "axios";

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 6Ekra7lnMQA3PUBgZRAGWDpIhXLmCqRq7NoHRvn7GQ4'
    }
});