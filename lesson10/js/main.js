function Years(season = "Зима") {
  this.months = 12;
  this.year = 2022;
  this.season = season;
  this.showMessage = function () {
    alert(`${this.season} - прекрасное время года!`);
  };
}

const newYear = new Years("Лето");
newYear.showMessage();
