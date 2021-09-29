package com.bezkoder.springjwt.models;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name="farmerPost")
public class FarmerPost {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="user")
	private User user;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Result result;
	
	// private Bid bid;
	
	


	@Column(name= "crop_name")
	private String crop_name;
	


	@Column(name= "species")
	private String species;
	
	@Column(name= "grade")
	private String grade;
	
	@Column(name= "sowing_time")
	private Date sowing_time;
	
	@Column(name= "location")
	private String location;
	
	@Column(name= "storage_time")
	private Date storage_time;
	
	@Column(name= "qty")
	private int qty;
	
	@Column(name= "photos")
	private String photos;
	
	@Column(name= "least_price")
	private int least_price;
	
	@Column(name= "status")
	private boolean status;
	
	

	@OneToMany(mappedBy = "farmerpost")
	 private List<Bid> bid = new ArrayList<>();
	
	

	public void setBid(List<Bid> bid) {
		this.bid = bid;
	}




	public FarmerPost() {
		
	}
	
	
	
	
	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public User getuser() {
		return user;
	}




	public void setUser(User user) {
		this.user = user;
	}




	public String getCrop_name() {
		return crop_name;
	}




	public void setCrop_name(String crop_name) {
		this.crop_name = crop_name;
	}




	public String getSpecies() {
		return species;
	}




	public void setSpecies(String species) {
		this.species = species;
	}




	public String getGrade() {
		return grade;
	}




	public void setGrade(String grade) {
		this.grade = grade;
	}




	public Date getSowing_time() {
		return sowing_time;
	}




	public void setSowing_time(Date sowing_time) {
		this.sowing_time = sowing_time;
	}




	public String getLocation() {
		return location;
	}




	public void setLocation(String location) {
		this.location = location;
	}




	public Date getStorage_time() {
		return storage_time;
	}




	public void setStorage_time(Date storage_time) {
		this.storage_time = storage_time;
	}




	public int getQty() {
		return qty;
	}




	public void setQty(int qty) {
		this.qty = qty;
	}




	public String getPhotos() {
		return photos;
	}




	public void setPhotos(String photos) {
		this.photos = photos;
	}




	public int getLeast_price() {
		return least_price;
	}




	public void setLeast_price(int least_price) {
		this.least_price = least_price;
	}




	public boolean isStatus() {
		return status;
	}




	public void setStatus(boolean status) {
		this.status = status;
	}

//	public List<Bid> getBid() {
//		return bid;
//	}
//
//	public void setBid(List<Bid> bid) {
//		this.bid = bid;
//	}


	public FarmerPost(String crop_name, String species, String grade, Date sowing_time, String location,
			Date storage_time, int qty, String photos, int least_price, boolean status) {
		super();
		this.crop_name = crop_name;
		this.species = species;
		this.grade = grade;
		this.sowing_time = sowing_time;
		this.location = location;
		this.storage_time = storage_time;
		this.qty = qty;
		this.photos = photos;
		this.least_price = least_price;
		this.status = status;
	}
}
