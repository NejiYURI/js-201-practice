var BMI = {
    height: 'Default',
    weight: 'Default',
    getBMI: function () {
        var result = this.weight / ((this.height * this.height) / 10000);
        if (result < 18.5) {
            return "過輕";
        } else if (result < 24) {
            return "正常";
        } else if (result < 27) {
            return "昱彥";
        } else if (result < 30) {
            return "有點昱彥"
        } else if (result < 35) {
            return "中度昱彥";
        } else if (result < 30) {
            return "重度昱彥";
        }
    }

}

var person = Object.create(BMI);
person.height = 170;
person.weight = 50;
person.getBMI();