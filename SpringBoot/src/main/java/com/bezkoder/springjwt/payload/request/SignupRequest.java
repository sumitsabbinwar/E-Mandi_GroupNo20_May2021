package com.bezkoder.springjwt.payload.request;

import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
    @NotBlank
    @Size(min = 3, max = 20)
    private String username;
 
    @NotBlank
    @Size(max = 200)
    @Email
    private String email;
    
    @NotBlank
    @Size(max = 200)
    private String adharno;
    @NotBlank
    @Size(max = 200)
   private String contact;
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  
    public String getUsername() {
        return username;
    }
 
    public void setUsername(String username) {
        this.username = username;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
 
    public String getAdharno() {
  		return adharno;
  	}

  	public void setAdharno(String adharno) {
  		this.adharno = adharno;
  	}
  	
  	

  	public String getContact() {
  		return contact;
  	}

  	public void setContact(String contact) {
  		this.contact = contact;
  	}
    public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRole() {
      return this.role;
    }
    
    
  

	public void setRole(Set<String> role) {
      this.role = role;
    }
}
