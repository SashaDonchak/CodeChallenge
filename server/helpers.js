const { default: faker } = require("@faker-js/faker");
const languages = ['en', 'de', 'es', 'it'];
const statuses = ['online', 'offline'];
const randomValue = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const generateAdvisor = () => {
    const advisor = {
        id: faker.datatype.uuid(),
        reviews: [],
        lang: randomValue(languages),
        status: randomValue(statuses),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    };

    const reviewsCount = Math.floor(Math.random() * 10);

    for (let j = 0; j <= reviewsCount; j++) {
        advisor.reviews.push(faker.datatype.uuid());
    }

    return advisor;
}

function sortAdvisors(advisors, sort) {
  const [sortField, sortValue] = sort;
  const fieldType = typeof advisors[0]?.[sortField];

  if (!fieldType) return advisors;

  const sortNumbersASC = (a, b) => a - b;
  const sortNumbersDESC = (a, b) => b - a;

  if (fieldType === 'number') {
      return advisors.sort((a, b) => {
          if (sortValue === 'ASC') {
              return sortNumbersASC(a[sortField], b[sortField]);
          }

          if (sortValue === 'DESC') {
              return sortNumbersDESC(a[sortField], b[sortField]);
          }
      });
  }

  if (Array.isArray(advisors[0][sortField])) {
      return advisors.sort((a, b) => {
          if (sortValue === 'ASC') {
              return sortNumbersASC(a[sortField].length, b[sortField].length);
          }

          if (sortValue === 'DESC') {
              return sortNumbersDESC(a[sortField].length, b[sortField].length);
          }
      });
  }

  if (fieldType === 'string') {
      return advisors.sort();
  }

  return advisors;
}

function filterAdvisors(advisors, filters) {
    let result = advisors;
    Object.keys(filters).forEach((key) => {
        result = advisors.map((advisor) => {
            if (typeof advisor[key] === undefined || typeof advisor[key] !== typeof filters[key][0]) return advisor;
            advisor[key] = randomValue(filters[key]);
            return advisor;
        })
    });
    return result;
}

module.exports = {
    generateAdvisor,
    sortAdvisors,
    filterAdvisors
}