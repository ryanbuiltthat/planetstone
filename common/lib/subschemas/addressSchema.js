/**
 * Created by Ryan on 8/9/2015.
 */
AddressSchema = new SimpleSchema({
    street: {
        label:"Street",
        type: String,
        max: 100
    },
    street2: {
        label: "Street 2",
        type: String,
        max: 100
    },
    city: {
        label: "City",
        type: String,
        max: 50
    },
    state: {
        label: "State",
        type: String,
        regEx: /^A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]$/
    },
    zip: {
        label:"Zip",
        type: String,
        regEx: /^[0-9]{5}$/
    }
});