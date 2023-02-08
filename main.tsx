import ReactDOM from 'react-dom/client'
import React from "react";
import './app.scss'
import TableComponent from './src/index'

const headers = [
    {
        name: 'First Name',
        key: 'firstName',
        sortable: true

    },
    {
        name: 'Last Name',
        key: 'lastName',
        sortable: true
    },
    {
        name: 'Birth Date',
        key: 'birthDate',
        sortable: true
    },
    {
        name: 'Start Date',
        key: 'startDate',
        sortable: true
    },
    {
        name: 'Job Title',
        key: 'jobTitle',
        sortable: true
    },
    {
        name: 'Department',
        key: 'department',
        sortable: true
    },
    {
        name: 'Street',
        key: 'street',
        sortable: true
    },
    {
        name: 'City',
        key: 'city',
        sortable: true
    },
    {
        name: 'State',
        key: 'state',
        sortable: true
    },
    {
        name: 'Zip Code',
        key: 'zipcode',
        sortable: true
    },
]
const data = [
    {
        firstName: "Romanie",
        lastName: "Hope",
        birthDate: "1992-02-01",
        startDate: "2019-01-01",
        jobTitle: "Business Analyst",
        department: "Executive",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303707"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303707"
            }
        }
    },
    {
        firstName: "Jacques",
        lastName: "Dubois",
        birthDate: "1985-03-15",
        startDate: "2022-05-01",
        jobTitle: "Developer",
        department: "IT",
        street: "456 Rue de la Paix",
        city: "Paris",
        state: "FR",
        zipcode: "75006",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303714"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303714"
            }
        }
    },
    {
        firstName: "Lorem",
        lastName: "Ipsum",
        birthDate: "1998-01-01",
        startDate: "2019-01-01",
        jobTitle: "Developer",
        department: "IT",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303686"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303686"
            }
        }
    },
    {
        firstName: "Romin",
        lastName: "Irani",
        birthDate: "1990-02-01",
        startDate: "2019-01-01",
        jobTitle: "Developer",
        department: "Executive",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303699"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303699"
            }
        }
    },
    {
        firstName: "Maria",
        lastName: "Garcia",
        birthDate: "1995-07-01",
        startDate: "2022-07-01",
        jobTitle: "QA Engineer",
        department: "IT",
        street: "Calle de Madrid",
        city: "Madrid",
        state: "ES",
        zipcode: "28001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303710"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303710"
            }
        }
    },
    {
        firstName: "Romain",
        lastName: "Le boss",
        birthDate: "1990-03-01",
        startDate: "2019-05-01",
        jobTitle: "Fullstatck Developer",
        department: "FreeLance",
        street: "La Joconde",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303715"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303715"
            }
        }
    },
    {
        firstName: "Neil",
        lastName: "Irani",
        birthDate: "1990-02-01",
        startDate: "2019-01-01",
        jobTitle: "Developer",
        department: "Executive",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303703"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303703"
            }
        }
    },
    {
        firstName: "Bart",
        lastName: "Vermeulen",
        birthDate: "1992-11-15",
        startDate: "2022-09-01",
        jobTitle: "Business Analyst",
        department: "Executive",
        street: "Koningstraat",
        city: "Brussels",
        state: "BE",
        zipcode: "1000",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303712"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303712"
            }
        }
    },
    {
        firstName: "Nicolene",
        lastName: "Du Plessis",
        birthDate: "1989-02-28",
        startDate: "2022-12-01",
        jobTitle: "HR Manager",
        department: "Executive",
        street: "Pretoria Road",
        city: "Johannesburg",
        state: "ZA",
        zipcode: "2000",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303718"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303718"
            }
        }
    },
    {
        firstName: "Jon",
        lastName: "Doe",
        birthDate: "1980-01-01",
        startDate: "2019-01-01",
        jobTitle: "CEO",
        department: "Executive",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303684"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303684"
            }
        }
    },
    {
        firstName: "Karl",
        lastName: "Hans",
        birthDate: "1990-01-01",
        startDate: "2020-01-01",
        jobTitle: "CTO",
        department: "Executive",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303696"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303696"
            }
        }
    },
    {
        firstName: "Tom",
        lastName: "Hanks",
        birthDate: "1990-02-01",
        startDate: "2019-01-01",
        jobTitle: "Program Directory",
        department: "Executive",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303709"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303709"
            }
        }
    },
    {
        firstName: "Stefano",
        lastName: "Martinelli",
        birthDate: "1991-08-22",
        startDate: "2022-06-01",
        jobTitle: "Product Manager",
        department: "Executive",
        street: "Via Roma",
        city: "Rome",
        state: "IT",
        zipcode: "00100",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303715"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303715"
            }
        }
    },
    {
        firstName: "Elly",
        lastName: "Charles",
        birthDate: "1995-01-01",
        startDate: "2021-01-01",
        jobTitle: "Developer",
        department: "IT",
        street: "123 Main St",
        city: "Paris",
        state: "FR",
        zipcode: "75001",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303704"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303704"
            }
        }
    },
    {
        firstName: "Lionel",
        lastName: "Leroy",
        birthDate: "1994-05-11",
        startDate: "2022-11-01",
        jobTitle: "Developer",
        department: "IT",
        street: "Rue de la Republique",
        city: "Paris",
        state: "FR",
        zipcode: "75005",
        createdById: {
            $oid: "63bffa0f37350e74e543ff4e"
        },
        createdAt: {
            $date: {
                $numberLong: "1674825303713"
            }
        },
        updatedAt: {
            $date: {
                $numberLong: "1674825303713"
            }
        }
    }
]
const Main = () => {
    const handlePageChange = function(page: number) {
        console.log(page)
    }

    const handleLimitChange = function(limit: number) {
        console.log(limit)
    }

    return (
        <div className="app">
            <TableComponent
                headers={headers}
                data={data}
                currentPage={1}
                totalPages={4}
                activeLimit={5}
                limitOptions={[5,10,20,50,100]}
                totalResults={20}
                onPageChange={handlePageChange}
                onLimitChange={handleLimitChange}
            />
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Main />
)
