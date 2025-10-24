// Country lists based on user specifications
const visaExemptCountries = [
    'AD', 'AG', 'AR', 'AM', 'AU', 'AT', 'BS', 'BY', 'BE', 'BZ', 
    'BT', 'BO', 'BA', 'BW', 'BR', 'BN', 'BG', 'KH', 'CA', 'CL', 
    'CO', 'KM', 'CR', 'HR', 'CY', 'CZ', 'DK', 'DM', 'EC', 'SV', 
    'EE', 'FJ', 'FI', 'FR', 'DE', 'GR', 'GD', 'GT', 'GY', 'HN', 
    'HK', 'HU', 'IS', 'IE', 'IL', 'IT', 'JM', 'JP', 'KI', 'KW', 
    'LV', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MY', 'MV', 'MT', 
    'MH', 'MU', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'NA', 'NR', 
    'NL', 'NZ', 'NI', 'NO', 'OM', 'PW', 'PA', 'PG', 'PY', 'PE', 
    'PL', 'PT', 'QA', 'RO', 'RU', 'WS', 'SM', 'ST', 'SA', 'RS', 
    'SC', 'SG', 'SK', 'SI', 'SB', 'ZA', 'KR', 'ES', 'LK', 'KN', 
    'LC', 'VC', 'SR', 'SE', 'CH', 'TW', 'TH', 'TO', 'TT', 'TN', 
    'TR', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'VU', 'VA', 
    'VN', 'HKSAR', // Added Hong Kong SAR passport
    'KI', 'MH', 'FM', 'NR', 'PW', 'WS', 'SB', 'TV', 'VU' // Added visa-free countries
];

const authorizedVisaCountries = [
    'AF', 'AL', 'DZ', 'AO', 'AZ', 'BH', 'BD', 'BJ', 'BF', 'BI', 
    'CV', 'TD', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 
    'GE', 'GN', 'GW', 'HT', 'ID', 'IR', 'IQ', 'JO', 'KZ', 'XK', 
    'KG', 'LA', 'LB', 'LS', 'LR', 'LY', 'ML', 'MR', 'MA', 'MZ', 
    'MM', 'NP', 'NE', 'NG', 'OM', 'PK', 'PS', 'RW', 'SN', 'SL', 
    'SO', 'SD', 'SR', 'SY', 'TJ', 'TM', 'UZ', 'YE', 'ZM'
];

const stampedVisaCountries = [
    'CM', 'CF', 'CU', 'DO', 'GH', 'MO', 'MW', 'CN', 'PH', 'CG', 
    'TG', 'VE', 'ZW', 'HKDI', 'MAC', // Added Hong Kong DI and Macao
    'IN', 'SZ' // Added India and Eswatini
];

// Special countries with different conditions for transit visas only
const specialCountries = ['HT', 'CU'];

// Countries eligible for transit exemptions (can transit without visa if they meet conditions)
const transitExemptionCountries = [
    'AF', 'AO', 'DZ', 'AZ', 'BD', 'BJ', 'BF', 'BI', 'CV', 'CM',
    'TD', 'CG', 'CD', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA',
    'GM', 'GE', 'GH', 'GN', 'GW', 'KZ', 'KE', 'KG', 'LR',
    'ML', 'MR', 'MZ', 'NP', 'NE', 'NG', 'PK', 'SN', 'SL', 'SO',
    'LK', 'SD', 'TJ', 'TG', 'TM', 'UZ'
    // India removed from transit exemption countries
];

// Privileged visa countries
const privilegedVisaCountries = ['CA', 'US', 'AU', 'KR', 'JP', 'GB', 'SG'];
// Add EU countries to privileged list
const euCountries = [
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 
    'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 
    'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
];
privilegedVisaCountries.push(...euCountries);

// All countries for the dropdown (Barbados removed)
const allCountries = [
    {code: 'AF', name: 'Afghanistan'}, {code: 'AL', name: 'Albania'}, {code: 'DZ', name: 'Algeria'}, {code: 'AD', name: 'Andorra'}, {code: 'AO', name: 'Angola'}, {code: 'AG', name: 'Antigua and Barbuda'}, {code: 'AR', name: 'Argentina'}, {code: 'AM', name: 'Armenia'}, {code: 'AU', name: 'Australia'}, {code: 'AT', name: 'Austria'}, {code: 'AZ', name: 'Azerbaijan'}, {code: 'BS', name: 'Bahamas'}, {code: 'BH', name: 'Bahrain'}, {code: 'BD', name: 'Bangladesh'}, {code: 'BY', name: 'Belarus'}, {code: 'BE', name: 'Belgium'}, {code: 'BZ', name: 'Belize'}, {code: 'BJ', name: 'Benin'}, {code: 'BT', name: 'Bhutan'}, {code: 'BO', name: 'Bolivia'}, {code: 'BA', name: 'Bosnia and Herzegovina'}, {code: 'BW', name: 'Botswana'}, {code: 'BR', name: 'Brazil'}, {code: 'BN', name: 'Brunei'}, {code: 'BG', name: 'Bulgaria'}, {code: 'BF', name: 'Burkina Faso'}, {code: 'BI', name: 'Burundi'}, {code: 'CV', name: 'Cabo Verde'}, {code: 'KH', name: 'Cambodia'}, {code: 'CM', name: 'Cameroon'}, {code: 'CA', name: 'Canada'}, {code: 'CF', name: 'Central African Republic'}, {code: 'TD', name: 'Chad'}, {code: 'CL', name: 'Chile'}, {code: 'CN', name: 'China'}, {code: 'CO', name: 'Colombia'}, {code: 'KM', name: 'Comoros'}, {code: 'CG', name: 'Congo'}, {code: 'CD', name: 'Democratic Republic of Congo'}, {code: 'CR', name: 'Costa Rica'}, {code: 'CI', name: 'Ivory Coast'}, {code: 'HR', name: 'Croatia'}, {code: 'CU', name: 'Cuba'}, {code: 'CY', name: 'Cyprus'}, {code: 'CZ', name: 'Czech Republic'}, {code: 'DK', name: 'Denmark'}, {code: 'DJ', name: 'Djibouti'}, {code: 'DM', name: 'Dominica'}, {code: 'DO', name: 'Dominican Republic'}, {code: 'EC', name: 'Ecuador'}, {code: 'EG', name: 'Egypt'}, {code: 'SV', name: 'El Salvador'}, {code: 'GQ', name: 'Equatorial Guinea'}, {code: 'ER', name: 'Eritrea'}, {code: 'EE', name: 'Estonia'}, {code: 'SZ', name: 'Eswatini'}, {code: 'ET', name: 'Ethiopia'}, {code: 'FJ', name: 'Fiji'}, {code: 'FI', name: 'Finland'}, {code: 'FR', name: 'France'}, {code: 'GA', name: 'Gabon'}, {code: 'GM', name: 'Gambia'}, {code: 'GE', name: 'Georgia'}, {code: 'DE', name: 'Germany'}, {code: 'GH', name: 'Ghana'}, {code: 'GR', name: 'Greece'}, {code: 'GD', name: 'Grenada'}, {code: 'GT', name: 'Guatemala'}, {code: 'GN', name: 'Guinea'}, {code: 'GW', name: 'Guinea-Bissau'}, {code: 'GY', name: 'Guyana'}, {code: 'HT', name: 'Haiti'}, {code: 'HN', name: 'Honduras'}, {code: 'HU', name: 'Hungary'}, {code: 'IS', name: 'Iceland'}, {code: 'IN', name: 'India'}, {code: 'ID', name: 'Indonesia'}, {code: 'IR', name: 'Iran'}, {code: 'IQ', name: 'Iraq'}, {code: 'IE', name: 'Ireland'}, {code: 'IL', name: 'Israel'}, {code: 'IT', name: 'Italy'}, {code: 'JM', name: 'Jamaica'}, {code: 'JP', name: 'Japan'}, {code: 'JO', name: 'Jordan'}, {code: 'KZ', name: 'Kazakhstan'}, {code: 'KE', name: 'Kenya'}, {code: 'KI', name: 'Kiribati'}, {code: 'XK', name: 'Kosovo'}, {code: 'KW', name: 'Kuwait'}, {code: 'KG', name: 'Kyrgyzstan'}, {code: 'LA', name: 'Laos'}, {code: 'LV', name: 'Latvia'}, {code: 'LB', name: 'Lebanon'}, {code: 'LS', name: 'Lesotho'}, {code: 'LR', name: 'Liberia'}, {code: 'LY', name: 'Libya'}, {code: 'LI', name: 'Liechtenstein'}, {code: 'LT', name: 'Lithuania'}, {code: 'LU', name: 'Luxembourg'}, {code: 'MG', name: 'Madagascar'}, {code: 'MW', name: 'Malawi'}, {code: 'MY', name: 'Malaysia'}, {code: 'MV', name: 'Maldives'}, {code: 'ML', name: 'Mali'}, {code: 'MT', name: 'Malta'}, {code: 'MH', name: 'Marshall Islands'}, {code: 'MR', name: 'Mauritania'}, {code: 'MU', name: 'Mauritius'}, {code: 'MX', name: 'Mexico'}, {code: 'FM', name: 'Micronesia'}, {code: 'MD', name: 'Moldova'}, {code: 'MC', name: 'Monaco'}, {code: 'MN', name: 'Mongolia'}, {code: 'ME', name: 'Montenegro'}, {code: 'MA', name: 'Morocco'}, {code: 'MZ', name: 'Mozambique'}, {code: 'MM', name: 'Myanmar'}, {code: 'NA', name: 'Namibia'}, {code: 'NR', name: 'Nauru'}, {code: 'NP', name: 'Nepal'}, {code: 'NL', name: 'Netherlands'}, {code: 'NZ', name: 'New Zealand'}, {code: 'NI', name: 'Nicaragua'}, {code: 'NE', name: 'Niger'}, {code: 'NG', name: 'Nigeria'}, {code: 'KP', name: 'North Korea'}, {code: 'MK', name: 'North Macedonia'}, {code: 'NO', name: 'Norway'}, {code: 'OM', name: 'Oman'}, {code: 'PK', name: 'Pakistan'}, {code: 'PW', name: 'Palau'}, {code: 'PS', name: 'Palestine'}, {code: 'PA', name: 'Panama'}, {code: 'PG', name: 'Papua New Guinea'}, {code: 'PY', name: 'Paraguay'}, {code: 'PE', name: 'Peru'}, {code: 'PH', name: 'Philippines'}, {code: 'PL', name: 'Poland'}, {code: 'PT', name: 'Portugal'}, {code: 'QA', name: 'Qatar'}, {code: 'RO', name: 'Romania'}, {code: 'RU', name: 'Russia'}, {code: 'RW', name: 'Rwanda'}, {code: 'KN', name: 'Saint Kitts and Nevis'}, {code: 'LC', name: 'Saint Lucia'}, {code: 'VC', name: 'Saint Vincent and the Grenadines'}, {code: 'WS', name: 'Samoa'}, {code: 'SM', name: 'San Marino'}, {code: 'ST', name: 'Sao Tome and Principe'}, {code: 'SA', name: 'Saudi Arabia'}, {code: 'SN', name: 'Senegal'}, {code: 'RS', name: 'Serbia'}, {code: 'SC', name: 'Seychelles'}, {code: 'SL', name: 'Sierra Leone'}, {code: 'SG', name: 'Singapore'}, {code: 'SK', name: 'Slovakia'}, {code: 'SI', name: 'Slovenia'}, {code: 'SB', name: 'Solomon Islands'}, {code: 'SO', name: 'Somalia'}, {code: 'ZA', name: 'South Africa'}, {code: 'KR', name: 'South Korea'}, {code: 'SS', name: 'South Sudan'}, {code: 'ES', name: 'Spain'}, {code: 'LK', name: 'Sri Lanka'}, {code: 'SD', name: 'Sudan'}, {code: 'SR', name: 'Suriname'}, {code: 'SE', name: 'Sweden'}, {code: 'CH', name: 'Switzerland'}, {code: 'SY', name: 'Syria'}, {code: 'TW', name: 'Taiwan'}, {code: 'TJ', name: 'Tajikistan'}, {code: 'TZ', name: 'Tanzania'}, {code: 'TH', name: 'Thailand'}, {code: 'TG', name: 'Togo'}, {code: 'TO', name: 'Tonga'}, {code: 'TT', name: 'Trinidad and Tobago'}, {code: 'TN', name: 'Tunisia'}, {code: 'TR', name: 'Turkey'}, {code: 'TM', name: 'Turkmenistan'}, {code: 'TV', name: 'Tuvalu'}, {code: 'UG', name: 'Uganda'}, {code: 'UA', name: 'Ukraine'}, {code: 'AE', name: 'United Arab Emirates'}, {code: 'GB', name: 'United Kingdom'}, {code: 'US', name: 'United States'}, {code: 'UY', name: 'Uruguay'}, {code: 'UZ', name: 'Uzbekistan'}, {code: 'VU', name: 'Vanuatu'}, {code: 'VA', name: 'Vatican City'}, {code: 'VE', name: 'Venezuela'}, {code: 'VN', name: 'Vietnam'}, {code: 'YE', name: 'Yemen'}, {code: 'ZM', name: 'Zambia'}, {code: 'ZW', name: 'Zimbabwe'},
    // Added Hong Kong and Macao entries
    {code: 'HKSAR', name: 'Hong Kong (SAR Passport)'},
    {code: 'HKDI', name: 'Hong Kong (Document of Identity)'},
    {code: 'MAC', name: 'Macao'}
];

// Initialize the form when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupEventListeners();
});

// Initialize form elements
function initializeForm() {
    populateCountryDropdown();
    setupOptionButtons();
}

// Populate the country dropdown with all countries
function populateCountryDropdown() {
    const nationalitySelect = document.getElementById('nationality');
    
    // Clear any existing options except the first one
    while (nationalitySelect.options.length > 1) {
        nationalitySelect.remove(1);
    }
    
    // Sort countries alphabetically by name for better UX
    const sortedCountries = [...allCountries].sort((a, b) => a.name.localeCompare(b.name));
    
    // Add all countries to the dropdown
    sortedCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        nationalitySelect.appendChild(option);
    });
}

// Set up option button selection
function setupOptionButtons() {
    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', function() {
            handleOptionButtonClick(this);
        });
    });
}

// Handle option button click
function handleOptionButtonClick(button) {
    // Remove selected class from siblings
    const parentGroup = button.closest('.options-group');
    if (parentGroup) {
        parentGroup.querySelectorAll('.option-button').forEach(sibling => {
            sibling.classList.remove('selected');
        });
    }
    
    // Add selected class to clicked button
    button.classList.add('selected');
    
    // Set the value in the hidden input
    const hiddenInput = button.closest('.form-group').querySelector('input[type="hidden"]');
    if (hiddenInput) {
        hiddenInput.value = button.getAttribute('data-value');
        
        // Handle specific logic based on which question was answered
        if (hiddenInput.id === 'has_privileged_visa') {
            handlePrivilegedVisaAnswer(hiddenInput.value);
        }
        
        if (hiddenInput.id === 'stay_duration') {
            document.getElementById('submitBtn').classList.add('visible');
        }
    }
}

// Handle privileged visa answer
function handlePrivilegedVisaAnswer(answer) {
    if (answer === 'yes') {
        showPrivilegedVisaResult();
        // Hide submit button since we're showing result immediately
        document.getElementById('submitBtn').classList.remove('visible');
    } else if (answer === 'no') {
        document.getElementById('question3').classList.remove('hidden');
        document.getElementById('submitBtn').classList.add('visible');
    }
}

// Set up all event listeners
function setupEventListeners() {
    // Handle nationality change
    document.getElementById('nationality').addEventListener('change', function() {
        handleNationalityChange(this.value);
    });
    
    // Form submission
    document.getElementById('visaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });
}

// Handle nationality change
function handleNationalityChange(nationality) {
    // Reset form state
    resetForm();
    
    if (!nationality) {
        return; // No country selected
    }
    
    if (visaExemptCountries.includes(nationality)) {
        // Show exempt notice and HIDE the submit button
        document.getElementById('exemptNotice').classList.add('visible');
        document.getElementById('submitBtn').classList.remove('visible');
    } else {
        // Show question 2 and show the submit button when needed
        document.getElementById('question2').classList.remove('hidden');
        // Don't show submit button yet - wait for user to answer questions
        document.getElementById('submitBtn').classList.remove('visible');
    }
    
    // Clear any previous result
    document.getElementById('result').classList.remove('visible');
}

// Reset form to initial state
function resetForm() {
    // Reset hidden inputs
    document.getElementById('has_privileged_visa').value = '';
    document.getElementById('stay_duration').value = '';
    
    // Clear button selections
    document.querySelectorAll('.option-button.selected').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Hide all conditional elements
    document.getElementById('question2').classList.add('hidden');
    document.getElementById('question3').classList.add('hidden');
    document.getElementById('exemptNotice').classList.remove('visible');
    document.getElementById('submitBtn').classList.remove('visible');
    
    // Clear result
    document.getElementById('result').classList.remove('visible');
    document.getElementById('result').innerHTML = '';
}

// Handle form submission
function handleFormSubmission() {
    // Get form values
    const nationality = document.getElementById('nationality').value;
    const hasPrivilegedVisa = document.getElementById('has_privileged_visa')?.value || '';
    const stayDuration = document.getElementById('stay_duration')?.value || '';
    
    // Validate form
    if (!validateForm(nationality, hasPrivilegedVisa, stayDuration)) {
        return;
    }
    
    // Calculate and display result
    calculateOutcome(nationality, hasPrivilegedVisa, stayDuration);
}

// Validate form inputs
function validateForm(nationality, hasPrivilegedVisa, stayDuration) {
    if (!nationality) {
        alert('Please select your nationality.');
        return false;
    }
    
    // If country is not exempt, validate questions 2 and 3
    if (!visaExemptCountries.includes(nationality)) {
        if (!hasPrivilegedVisa) {
            alert('Please answer question 2.');
            return false;
        }
        
        if (hasPrivilegedVisa === 'no' && !stayDuration) {
            alert('Please answer question 3.');
            return false;
        }
    }
    
    return true;
}

// Calculate and display outcome
function calculateOutcome(nationality, hasPrivilegedVisa, stayDuration) {
    const countryName = allCountries.find(c => c.code === nationality)?.name || 'your country';
    let result;
    
    if (visaExemptCountries.includes(nationality)) {
        result = getVisaExemptResult(countryName);
    } else if (hasPrivilegedVisa === 'yes') {
        result = getPrivilegedVisaResult();
    } else if (specialCountries.includes(nationality) && stayDuration === 'short') {
        result = getSpecialTransitResult(countryName);
    } else if (stayDuration === 'long') {
        result = getTouristVisaResult(nationality, countryName);
    } else {
        result = getTransitResult(nationality, countryName);
    }
    
    displayResult(result);
}

// Get result for visa exempt countries
function getVisaExemptResult(countryName) {
    return {
        class: 'visa-not-required',
        message: `
            <h3>Visa Not Required</h3>
            <p>Based on your nationality (${countryName}), you do not require a visa to enter Panama for tourism purposes.</p>
        `
    };
}

// Get result for privileged visa holders
function getPrivilegedVisaResult() {
    return {
        class: 'visa-not-required',
        message: `
            <h3>Visa Not Required for Stays Up to 30 Days</h3>
            <p>Since you hold a valid visa from one of the privileged countries, you can stay in Panama for up to 30 days without requiring a separate visa.</p>
        `
    };
}

// Get result for special transit cases (Haiti and Cuba)
function getSpecialTransitResult(countryName) {
    return {
        class: 'special-case',
        message: `
            <h3>Special Transit Visa Required</h3>
            <div class="visa-type transit">SPECIAL TRANSIT VISA REQUIRED</div>
            <p>As a national of ${countryName} planning a transit stay of 12 hours or less, you need a special transit visa.</p>
            <div class="action-buttons">
                <a href="special-transit-visa" class="requirements-btn">View Required Documents</a>
            </div>
        `
    };
}

// Get result for tourist visas
function getTouristVisaResult(nationality, countryName) {
    let visaType, visaClass;
    
    if (authorizedVisaCountries.includes(nationality)) {
        visaType = 'AUTHORIZED VISA';
        visaClass = 'authorized';
    } else if (stampedVisaCountries.includes(nationality)) {
        visaType = 'STAMPED VISA';
        visaClass = 'stamped';
    } else {
        visaType = 'TOURIST VISA';
        visaClass = 'transit';
    }
    
    return {
        class: 'visa-required',
        message: `
            <h3>Tourist Visa Required</h3>
            <div class="visa-type ${visaClass}">${visaType} REQUIRED</div>
            <p>As a national of ${countryName} planning to stay more than 12 hours, you need a tourist visa.</p>
            <div class="action-buttons">
                <a href="tourist-visa" class="requirements-btn">View Required Documents</a>
            </div>
        `
    };
}

// Get result for transit visas
function getTransitResult(nationality, countryName) {
    if (transitExemptionCountries.includes(nationality)) {
        return {
            class: 'transit-allowed',
            message: `
                <h3>Transit Allowed Without Visa</h3>
                <div class="transit-exemptions">
                    <h4>Transit Exemption Conditions</h4>
                    <p>As a national of ${countryName} transiting for 12 hours or less, you are allowed to transit without a visa if you meet the following conditions:</p>
                    <ul class="conditions-list">
                        <li>You have a confirmed onward ticket</li>
                        <li>You remain in the international transit area</li>
                        <li>Your transit time is 12 hours or less</li>
                    </ul>
                </div>
            `
        };
    } else {
        return {
            class: 'visa-required',
            message: `
                <h3>Transit Visa Required</h3>
                <div class="visa-type transit">TRANSIT VISA REQUIRED</div>
                <p>As a national of ${countryName} planning a transit stay of 12 hours or less, you need a transit visa.</p>
                <div class="action-buttons">
                    <a href="transit-visa" class="requirements-btn">View Required Documents</a>
                </div>
            `
        };
    }
}

// Display the result
function displayResult(result) {
    const resultElement = document.getElementById('result');
    resultElement.className = `result visible ${result.class}`;
    resultElement.innerHTML = result.message;
    
    // Scroll to result
    resultElement.scrollIntoView({ behavior: 'smooth' });
}

// Show privileged visa result immediately when user selects "yes"
function showPrivilegedVisaResult() {
    const result = getPrivilegedVisaResult();
    displayResult(result);
}
