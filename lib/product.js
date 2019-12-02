/**
 *
 * @namespace faker.product
 */
var Product = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * product
   *
   * @method faker.product.product
   */
  self.product = function () {
    return fake('{{product.brand}} {{product.name}} {{product.material}} {{product.use}} {{product.barcode}}');
  };

  self.product.schema = {
    "description": "Generates a random Product.",
    "sampleResults": ["Art Supplies", "Fitness", "Electronics"]
  };

  /**product();
   * manufacturer
   *
   * @method faker.product.brand
   */
  self.brand = function () {
    return faker.random.arrayElement(faker.definitions.product.brand);
  };

  self.brand.schema = {
    "description": "Generates a brand name.",
    "sampleResults": ["Winsor&Newton", "DOMYOS", "LG"]
  };


  /**
   * model
   *
   * @method faker.product.name
   */
  self.name = function () {
    return faker.random.arrayElement(faker.definitions.product.name);
  };

  self.name.schema = {
    "description": "Generates a Product Name.",
    "sampleResults": ["Easelv1", "Elliptical Trainer4", "OLED TV realcolors"]
  };

  /**
   * use
   *
   * @method faker.product.use
   */
  self.use = function () {
            if(faker.random.number({ min: 10000, max: 100000})%2==0){
                  return  faker.random.number({ min: 10000, max: 100000});
            }//faker.random.arrayElement(faker.definitions.product.use);
            else{
              return faker.random.number({ min: 10000, max: 100000})*10;+ faker.random.arrayElement(faker.definitions.product.use);
            }
    };

  self.use.schema = {
    "description": "Generates a Product use.",
    "sampleResults": ["Consumable", "Applliance", "Cosmetics"]
  };

  /* fuel
   *
   * @method faker.product.material
   */

  self.material = function () {

    return faker.random.arrayElement(faker.definitions.product.material);
  };

  self.material.schema = {
    "description": "Generates a Product Material.",
    "sampleResults": ["Electric", "Waterproof", "Teak Wood"]
  };

  /**
   * vin
   *
   * @method faker.product.barcode
   */
  self.barcode = function () {
    return (
      faker.random.alphaNumeric(10) +
      faker.random.alpha({ count: 1, upcase: true }) +
      faker.random.alphaNumeric(1) +
      faker.random.number({ min: 10000, max: 100000}) // return five digit #
    ).toUpperCase();
  };

  self.barcode.schema = {
    "description": "Generates a valid VIN number.",
    "sampleResults": ["YV1MH682762184654", "3C7WRMBJ2EG208836"]
  };

  /**
   * color
   *
   * @method faker.product.color
   */
  self.color = function () {
    return fake('{{commerce.color}}');
  };

  self.color.schema = {
    "description": "Generates a color",
    "sampleResults": ["red", "white", "black"]
  };
};

module["exports"] = Product;
