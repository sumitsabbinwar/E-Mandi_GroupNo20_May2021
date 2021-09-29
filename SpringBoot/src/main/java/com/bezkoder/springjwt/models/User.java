package com.bezkoder.springjwt.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "users", 
		uniqueConstraints = { 
			@UniqueConstraint(columnNames = "username"),
			@UniqueConstraint(columnNames = "email") 
		})
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "Name cannot be null")
	@Size(max = 200)
	private String username;

	@NotBlank(message = "Name cannot be null")
	@Size(max = 200)
	@Email
	private String email;

	@NotBlank(message = "Name cannot be null")
	@Size(max = 200)
	private String adharno;
	
	@NotBlank(message = "Name cannot be null")
	@Size(max = 200)
	  private String contact;
	@NotBlank(message = "Name cannot be null")
	@Size(max = 200)
	private String password;
	
	

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	public User() {
	}

	public User(String username, String email,String adharno, String contact, String password) {
		this.username = username;
		this.email = email;
		this.adharno = adharno;
		this.contact = contact;
		this.password = password;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
	
	

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
}
