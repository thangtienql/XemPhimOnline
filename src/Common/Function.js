var Function = {
    textToSlug: (text) => {
        text = text.toLowerCase();
        text = text.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        text = text.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        text = text.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        text = text.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        text = text.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        text = text.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        text = text.replace(/đ/gi, 'd');
        text = text.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        text = text.replace(/ /gi, "-");
        text = text.replace(/\-\-\-\-\-/gi, '-');
        text = text.replace(/\-\-\-\-/gi, '-');
        text = text.replace(/\-\-\-/gi, '-');
        text = text.replace(/\-\-/gi, '-');
        text = '@' + text + '@';
        text = text.replace(/\@\-|\-\@|\@/gi, '');
        return text;
    }
}

module.exports = Function